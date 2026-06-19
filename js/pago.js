
        // Render del carrito real desde localStorage
        function renderCartOnPayment() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const itemsContainer = document.querySelector('.cart-items');
            if (!itemsContainer) return;

            itemsContainer.innerHTML = '';
            let subtotal = 0;

            cart.forEach((item, idx) => {
                const unidades = item.unidades || 1;
                const totalItem = (item.precio || 0) * unidades;
                subtotal += totalItem;

                const div = document.createElement('div');
                div.className = 'cart-item';
                div.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${item.imagen || 'img/logo/SCALIX.png'}" alt="${item.nombre}">
                    </div>
                    <div class="cart-item-details">
                        <h3 class="cart-item-name">${item.nombre}</h3>
                        <label class="cart-item-price">€${(item.precio || 0).toFixed(2)}</label>
                        <div class="cart-item-quantity">
                            <button data-idx="${idx}" class="btn-dec">-</button>
                            <span class="quantity-value">${unidades}</span>
                            <button data-idx="${idx}" class="btn-inc">+</button>
                        </div>
                    </div>`;
                itemsContainer.appendChild(div);
            });

            const iva = subtotal * 0.21;
            const envio = cart.length > 0 ? 10 : 0;
            const total = subtotal + iva + envio;

            const totRows = document.querySelectorAll('.cart-summary-totals .cart-row span:last-child');
            if (totRows.length >= 3) {
                totRows[0].textContent = '€' + subtotal.toFixed(2);
                totRows[1].textContent = '€' + iva.toFixed(2);
                document.querySelector('.cart-total span:last-child').textContent = '€' + total.toFixed(2);
            }

            // Listeners de cantidad
            itemsContainer.querySelectorAll('.btn-inc').forEach(btn => {
                btn.addEventListener('click', () => modifyQty(parseInt(btn.getAttribute('data-idx')), 1));
            });
            itemsContainer.querySelectorAll('.btn-dec').forEach(btn => {
                btn.addEventListener('click', () => modifyQty(parseInt(btn.getAttribute('data-idx')), -1));
            });
        }

        function modifyQty(index, delta) {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            if (!cart[index]) return;
            const unidades = (cart[index].unidades || 1) + delta;
            if (unidades <= 0) {
                cart.splice(index, 1);
            } else {
                cart[index].unidades = unidades;
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCartOnPayment();
        }
        
        // Función para seleccionar método de pago
        function selectPaymentMethod(element, method) {
            // Eliminar selección actual
            document.querySelectorAll('.payment-method').forEach(method => {
                method.classList.remove('selected');
            });
            
            // Añadir selección al elemento clickeado
            element.classList.add('selected');
            
            // Mostrar formulario correspondiente
            // Continuación del código JavaScript para cambiar entre métodos de pago
document.getElementById('card-payment-form').style.display = 'none';
document.getElementById('paypal-payment-form').style.display = 'none';
document.getElementById('transfer-payment-form').style.display = 'none';

// Mostrar el formulario seleccionado
document.getElementById(method + '-payment-form').style.display = 'block';
}

// Manejar envío del formulario
document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Guardar pedido real desde el carrito
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Tu carrito está vacío.');
        return;
    }

    const usuario = JSON.parse(localStorage.getItem('usuario')) || null;
    const form = e.target;
    const pedido = {
        id: 'PED-' + Date.now(),
        fecha: new Date().toISOString(),
        items: cart,
        totals: calcularTotales(cart),
        datosEnvio: {
            nombre: form.nombre.value,
            apellidos: form.apellidos.value,
            email: form.email.value,
            telefono: form.telefono.value,
            direccion: form.direccion.value,
            ciudad: form.ciudad.value,
            codigo_postal: form.codigo_postal.value,
            provincia: form.provincia.value,
            pais: form.pais.value
        },
        usuarioEmail: usuario?.email || null
    };

    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    pedidos.push(pedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));

    // Vaciar carrito
    localStorage.removeItem('cart');

    alert('¡Pago procesado correctamente! Tu pedido ha sido confirmado.');
    window.location.href = 'perfil.html#pedidos';
});

// Inicializar totales al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    renderCartOnPayment();
    
    // Formato para número de tarjeta
    document.getElementById('card_number').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = '';
        
        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += ' ';
            }
            formattedValue += value[i];
        }
        
        e.target.value = formattedValue.slice(0, 19); // Limitar a 16 dígitos + 3 espacios
    });
    
    // Formato para fecha de caducidad
    document.getElementById('expiry_date').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        
        e.target.value = value.slice(0, 5); // MM/YY
    });
    
    // Formato para CVV
    document.getElementById('cvv').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        e.target.value = value.slice(0, 3); // Limitar a 3 dígitos
    });
});

function calcularTotales(cart) {
    let subtotal = 0;
    cart.forEach(i => {
        const unidades = i.unidades || 1;
        subtotal += (i.precio || 0) * unidades;
    });
    const iva = subtotal * 0.21;
    const envio = cart.length > 0 ? 10 : 0;
    const total = subtotal + iva + envio;
    return { subtotal, iva, envio, total };
}

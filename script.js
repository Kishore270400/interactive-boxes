function selectBundle(pairs, price) {
    // Remove active class from all options
    document.querySelectorAll('.bundle-option').forEach(option => {
        option.classList.remove('active');
    });

    // Add active class to selected option
    event.currentTarget.classList.add('active');

    // Set radio checked
    event.currentTarget.querySelector('input').checked = true;

    // Update total price
    document.getElementById('total-price').innerText = price;
}

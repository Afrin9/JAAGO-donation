// mobile menu
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
// search toggle
const searchButton = document.getElementById('searchButton');
const searchButtonMobile = document.getElementById('searchButtonMobile');
const searchModal = document.getElementById('searchModal');
const closeSearch = dFcument.getElementById('closeSearch');
searchButton.addEventListener('click', () => searchModal.classList.remove('hidden'));
if (searchButtonMobile) {
    searchButtonMobile.addEventListener('click', () => searchModal.classList.remove('hidden'));
}
closeSearch.addEventListener('click', () => searchModal.classList.add('hidden'));
// set donation amount
function setDonation(amount) {
    document.getElementById('donationInput').value = amount;
}
// change gift quantity
function changeQty(item, delta) {
    const qtyInput = document.getElementById('qty' + item);
    let qty = parseInt(qtyInput.value) || 0;
    qty += delta;
    if (qty < 0) qty = 0;
    qtyInput.value = qty;
}
// donation validation 
const donateButton = document.getElementById('donateButton');
const donateZakatButton = document.getElementById('donateZakatButton');
const successModal = document.getElementById('successModal');
const errorModal = document.getElementById('errorModal');
donateButton.addEventListener('click', () => {
    const amount = parseInt(document.getElementById('donationInput').value);
    if (!amount || amount <= 0) {
        errorModal.classList.remove('hidden');
    } else {
        document.getElementById('successMessage').innerText = 'Thank you for donating ' + amount + ' BDT.';
        successModal.classList.remove('hidden');
    }
});
donateZakatButton.addEventListener('click', () => {
    const amount = parseInt(document.getElementById('donationInput').value);
    if (!amount || amount <= 0) {
        errorModal.classList.remove('hidden');
    } else {
        document.getElementById('successMessage').innerText = 'Thank you for your Zakat donation of ' + amount + ' BDT.';
        successModal.classList.remove('hidden');
    }
});
// close
function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}
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
const closeSearch = document.getElementById('closeSearch'); 

searchButton.addEventListener('click', () => searchModal.classList.remove('hidden'));
if (searchButtonMobile) {
    searchButtonMobile.addEventListener('click', () => searchModal.classList.remove('hidden'));
}
closeSearch.addEventListener('click', () => searchModal.classList.add('hidden'));

const giftPrices = {
    Bag: 500,
    Box: 200,
    Uniform: 1000
};

function changeQty(item, delta) {
    const qtyInput = document.getElementById("qty" + item);
    let qty = parseInt(qtyInput.value) || 0;
    qty += delta;
    if (qty < 0) qty = 0;
    qtyInput.value = qty;
    updateTotalDonation();
}

function updateTotalDonation() {
    const donationInput = document.getElementById('donationInput');
    if (!donationInput) {
        console.error("Donation input field not found!");
        return;
    }

    const baseAmount = parseInt(donationInput.value) || 0;

    const qtyBag = parseInt(document.getElementById("qtyBag")?.value) || 0;
    const qtyBox = parseInt(document.getElementById("qtyBox")?.value) || 0;
    const qtyUniform = parseInt(document.getElementById("qtyUniform")?.value) || 0;

    const totalGiftAmount = (qtyBag * 500) + (qtyBox * 200) + (qtyUniform * 1000);

    donationInput.value = baseAmount + totalGiftAmount;
}

function setDonation(amount) {
    document.getElementById("donationInput").value = amount;
    updateTotalDonation();
}

// donation validation 
const donateButton = document.getElementById('donateButton');
const donateZakatButton = document.getElementById('donateZakatButton');
const successModal = document.getElementById('successModal');
const errorModal = document.getElementById('errorModal');

donateButton.addEventListener('click', () => {
    const amount = parseInt(document.getElementById('donationInput').value);
    if (!amount || amount <= 0) {
        document.getElementById('errorMessage').textContent = 'Please enter a valid donation amount.';
        errorModal.classList.remove('hidden');
    } else {
        document.getElementById('successMessage').textContent = 'Thank you for donating ' + amount.toLocaleString() + ' BDT.';
        successModal.classList.remove('hidden');
    }
});


function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

//impact calculator
document.addEventListener('DOMContentLoaded', function() {
    updateTotalDonation();
    
    const impactSlider = document.getElementById('impactSlider');
    const impactAmount = document.getElementById('impactAmount');
    const mealsCount = document.getElementById('mealsCount');
    const booksCount = document.getElementById('booksCount');
    const uniformsCount = document.getElementById('uniformsCount');
    const monthsCount = document.getElementById('monthsCount');
    const childrenCount = document.getElementById('childrenCount');
    
    if (impactSlider) {
        impactSlider.addEventListener('input', function() {
            const amount = parseInt(this.value);
            impactAmount.textContent = amount.toLocaleString() + ' BDT';
        
            mealsCount.textContent = Math.floor(amount / 50);
            booksCount.textContent = Math.floor(amount / 200);
            uniformsCount.textContent = Math.floor(amount / 1000);
            monthsCount.textContent = Math.floor(amount / 500);
            childrenCount.textContent = Math.floor(amount / 250);
        });
        
        impactSlider.dispatchEvent(new Event('input'));
    }
});
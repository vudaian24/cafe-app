export function isNotEmpty(input) {
    return input.trim() !== '';
}

export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10,12}$/;
    return phoneRegex.test(phoneNumber);
}

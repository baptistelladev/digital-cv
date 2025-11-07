export const callOnWhatsApp = (phone: string, message: string) => {
  const cleanPhone = phone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/55${cleanPhone}?text=${encodedMessage}`;
  window.open(whatsappLink, "_blank");
};

export const scrollTo = (id: string) => {
  let section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

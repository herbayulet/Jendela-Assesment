const TOKEN_EXPIRATION_TIME = 5 * 60 * 1000; // 5 menit dalam milidetik

export const login = (email: string, password: string) => {
  if (email === "bayu@mail.com" && password === "password") {
    // Buat token
    const token = generateToken();

    localStorage.setItem("token", token); // Simpan di localStorage

    // Atur timeout untuk membersihkan token setelah 30 menit
    setTimeout(clearToken, TOKEN_EXPIRATION_TIME);

    return true;
  }
  return false;
};

// Fungsi untuk membersihkan token
export const clearToken = () => {
  localStorage.removeItem("token"); // Hapus token dari localStorage
};

// Fungsi untuk menghasilkan token
const generateToken = () => {
  // Menghasilkan token dengan panjang 10 karakter
  return Math.random().toString(36).substring(2, 12);
};

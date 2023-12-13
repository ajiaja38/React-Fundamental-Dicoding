const COMMON_CONTENT = {
  id: {
    header: "Catatan Pribadi",
  },
  en: {
    header: "Personal Note",
  },
};

const NAVBAR = {
  id: {
    activeLink: "Aktif",
    archiveLink: "Arsip",
  },
  en: {
    activeLink: "Active",
    archiveLink: "Archive",
  },
};

const LOGIN_CONTENT = {
  id: {
    button: "Masuk",
    cta: "Belum Punya Akun?",
    link: "Daftar",
    successMessage: "Berhasil Login!",
    errorMessage: "Email atau Password salah!",
  },
  en: {
    button: "Login",
    cta: "Don't have an account?",
    link: "Register",
    successMessage: "Successful Login!",
    errorMessage: "Email or Password wrong!",
  },
};

const REGISTER_CONTENT = {
  id: {
    name: "Nama",
    confirmPassword: "Konfirmasi Password",
    errorConfirm: "Password dan Konfirmasi Password tidak sama!",
    button: "Daftar",
    cta: "Sudah Punya Akun?",
    link: "Masuk",
    successMessage: "Berhasil Mendaftar!",
  },
  en: {
    name: "Name",
    confirmPassword: "Confirm Password",
    errorConfirm: "Password and Confirm Password not same!",
    button: "Register",
    cta: "Already have an account?",
    link: "Login",
    successMessage: "Successful Registration!",
  },
};

const CARD_MESSAGE = {
  id: {
    archive: "Anda Yakin Ingin Mengarsipkan Catatan?",
    restore: "Anda Yakin Ingin Mengembalikan Catatan?",
    delete: "Anda Yakin Ingin Menghapus Catatan?",
    successArchive: "Berhasil Mengarsipkan Catatan!",
    successRestore: "Berhasil Mengaktifkan Catatan!",
    successDelete: "Berhasil Menghapus Catatan!",
    errorDelete: "Gagal Menghapus Catatan!",
  },
  en: {
    archive: "Are you sure you want to archive this note?",
    restore: "Are you sure you want to restore this note?",
    delete: "Are you sure you want to delete this note?",
    successArchive: "Successful Archive Note!",
    successRestore: "Successful Unarchive Note!",
    successDelete: "Successful Delete Note!",
    errorDelete: "Failed Delete Note!",
  },
};

const ADD_NOTE_MESSAGE = {
  id: {
    success: "Berhasil Menambahkan Catatan!",
    error: "Gagal Menambahkan Catatan!",
  },
  en: {
    success: "Successful Add Note!",
    error: "Failed Add Note!",
  },
};

export {
  COMMON_CONTENT,
  LOGIN_CONTENT,
  REGISTER_CONTENT,
  NAVBAR,
  CARD_MESSAGE,
  ADD_NOTE_MESSAGE,
};

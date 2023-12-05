<template>
  <NuxtLayout name="auth">
    <div class="wrapper">
      <AuthCard v-if="step === 1">
        <template #header>
          <h5>Daftar Sekarang</h5>
        </template>
        <template #content>
          <input
            type="text"
            v-model="form.firstName"
            placeholder="Nama Depan"
            required
          />
          <span v-if="validation">*wajib di isi</span>
          <input
            type="text"
            v-model="form.lastName"
            placeholder="Nama Belakang"
            required
          />
          <span v-if="validation">*wajib di isi</span>
          <input
            type="text"
            v-model="form.email"
            placeholder="Email"
            @input="validateEmail"
            required
          />
          <span v-if="!isEmailValid">*Masukkan alamat email yang valid.</span>
          <button @click="nextForm" :disabled="validation ? true : false">
            Selanjutnya
          </button>
          <hr />
        </template>
        <template #footer>
          <h5>Sudah punya akun ? <span @click="loginPage">Masuk</span></h5>
        </template>
      </AuthCard>
      <AuthCard v-if="step === 2">
        <template #header>
          <h5>
            <span @click="previousForm">
              <Icon name="formkit:arrowleft" />
            </span>
            Kembali
          </h5>
        </template>
        <template #content>
          <input
            type="number"
            v-model="form.phone"
            placeholder="Nomor Telepon"
          />
          <span>*wajib di isi</span>
          <input
            type="password"
            v-model="form.password"
            placeholder="Password"
          />
          <span>*wajib di isi</span>
          <input
            type="password"
            v-model="form.confirmPassword"
            placeholder="Confirm Password"
          />
          <span v-if="validationPassword"
            >*mohon masukan password yang sama</span
          >
          <button @click="submit" :disabled="validation2 ? true : false">
            <CommonSpinner v-if="loading" />
            <div v-else>masuk</div>
          </button>
          <hr />
        </template>
        <template #footer>
          <span v-if="error">error</span>asda
          <h5>Sudah punya akun ? <span @click="loginPage">Masuk</span></h5>
        </template>
      </AuthCard>
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
import { useRegisterUser } from "~/composables/index";

export default defineNuxtComponent({
  setup() {
    const step = ref(1);
    const isEmailValid = ref(true);

    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isEmailValid.value = emailRegex.test(form.email);
    };

    const { data, postData, error, loading } = useRegisterUser();

    const form = reactive({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });

    const validation = computed(() => {
      if (
        form.firstName === "" ||
        form.lastName === "" ||
        form.email === "" ||
        isEmailValid.value === false
      )
        return true;
    });

    const validationPassword = computed(() => {
      if (form.password !== form.confirmPassword) {
        return true;
      }
    });

    const validation2 = computed(() => {
      if (
        form.phone === "" ||
        form.password !== form.confirmPassword ||
        form.password === "" ||
        form.confirmPassword === "" ||
        form.password.length <= 7
      )
        return true;
    });

    const isPwd = ref(true);
    const router = useRouter();

    const submit = () => {
      postData(form);
    };

    const nextForm = () => {
      step.value = 2;
    };

    onMounted(() => {});

    const previousForm = () => {
      step.value = 1;
    };

    const loginPage = () => {
      router.push("/");
    };

    return {
      form,
      isPwd,
      loginPage,
      step,
      error,
      data,
      isEmailValid,
      validation2,
      validateEmail,
      validationPassword,
      loading,
      previousForm,
      nextForm,
      submit,
      validation,
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  height: 95%;
  width: 90%;
}

.header {
  h5 {
    align-self: center;
    color: #730c07;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.04px;

    span {
      font-size: 30px;
      cursor: pointer;
    }
  }
}

.content {
  display: flex;
  flex-direction: column;
  gap: 15px;

  input {
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    height: 59px;
    padding: 20px 18px;
    color: #868686;
    letter-spacing: 2px;
  }

  input:focus {
    border: transparent;
    outline: none;
  }

  span {
    text-align: end;
    color: #730c07;
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
  }

  button {
    color: #fff;
    font-size: 18px;
    margin-top: 20px;
    border: none;
    height: 59px;
    border-radius: 7px;
    background: #eb3f36;
    box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.17);
    cursor: pointer;
    letter-spacing: 5px;
  }

  hr {
    color: red;
    width: 70%;
    height: 1px;
    margin-top: 30px;
    background: #c2c2c2;
  }
}

.footer {
  text-align: center;

  h5 {
    font-size: 10px;
    color: #7c7c7c;
  }

  span {
    color: #730c07;
    font-weight: bold;
    cursor: pointer;
  }
}

@media (min-width: 768px) {
  .wrapper {
    height: 90%;
    width: 40%;
  }

  .footer {
    h5 {
      font-size: 16px;
    }
  }
}
</style>

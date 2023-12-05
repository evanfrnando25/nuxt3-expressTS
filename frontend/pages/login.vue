<template>
  <NuxtLayout name="auth">
    <div class="wrapper">
      <AuthCard>
        <template #header>
          <h5>Masuk</h5>
          <span v-if="store.error && !store.loading"
            >*email / password yang anda masukan salah</span
          >
        </template>
        <template #content>
          <input type="text" v-model="form.email" placeholder="Email" />
          <q-input
            v-model="form.password"
            :type="isPwd ? 'password' : 'text'"
            placeholder="Password"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <span>Lupa Password ?</span>
          <button @click="submit">
            <CommonSpinner v-if="store.loading" />
            <div v-else>masuk</div>
          </button>
          <hr />
        </template>
        <template #footer>
          <h5>
            Belum Punya akun ?
            <span @click="registerPage">Daftar Sekarang</span>
          </h5>
        </template>
      </AuthCard>
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

export default defineNuxtComponent({
  setup() {
    const { authenticated } = storeToRefs(useAuthStore());
    const store = useAuthStore();
    const router = useRouter();

    const form = ref({
      email: "",
      password: "",
    });

    const submit = async () => {
      await store.authenticateUser(form.value);
      if (authenticated) {
        router.push("/product");
      }
    };

    const isPwd = ref(true);

    const registerPage = () => {
      router.push("/register");
    };

    return {
      form,
      submit,
      isPwd,
      store,
      registerPage,
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  height: 90%;
  width: 90%;
}

.header {
  h5 {
    color: #730c07;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.04px;
  }

  span {
    color: red;
    font-size: 20px;
    text-align: center;
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
    border: none;
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
    border: none;
    height: 59px;
    border-radius: 7px;
    background: #eb3f36;
    box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.17);
    cursor: pointer;
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
    height: 80%;
    width: 40%;
  }

  .footer {
    h5 {
      font-size: 16px;
    }
  }
}
:deep(.q-field__inner) {
  background: transparent !important;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0px 18px;
}

:deep(.q-field--standard .q-field__control):before {
  border: none;
  background: transparent;
}
:deep(.q-field--standard .q-field__control):after {
  background: transparent;
}

:deep(.q-field--filled .q-field__control):focus {
  background: transparent !important;
}

:deep(.q-field--filled .q-field__control):after {
  background: transparent !important;
}
</style>

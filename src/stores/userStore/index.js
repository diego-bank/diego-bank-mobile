import { create } from "zustand";

export const useUserStore = create((set) => ({
    email: undefined,
    first_name: undefined,
    last_name: undefined,
    cpf: undefined,
    url_image: undefined,

    setUserInformation: (email, first_name, last_name, cpf, url_image) => {
        set(state => ({
            email: email,
            first_name: first_name,
            last_name: last_name,
            cpf: cpf,
            url_image: url_image,
        })
        );
    },
    clearUserInformation: () =>
        set(state => ({
            email: undefined,
            first_name: undefined,
            last_name: undefined,
            cpf: undefined,
            url_image: undefined,
        })),
    })
);
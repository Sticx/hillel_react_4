export interface CategoryState {
    Peoples: boolean;
    Planets: boolean;
    Starships: boolean;
}
export type ApiProps = {
    stateCategories: {
        Peoples: boolean;
        Planets: boolean;
        Starships: boolean;
    };
}
export type TitleComponentProps = {
    itemName: string;
    handleClick: () => void;
}
export interface CustomButtonProps {
    title: string;
    itemMaps: { [key: string]: boolean };
    stateButtons: () => void;
}
export interface KartisProps {
    name: string;
    gender?: string;
    population?: string;
    starship_class?: string;
    birth_year?: string;
    rotation_period?: string;
    hyperdrive_rating?: string;
    eye_color?: string;
    diameter?: string;
    length?: string;
}

export  interface KartisComponentProps {
    kartisProps: KartisProps;
}
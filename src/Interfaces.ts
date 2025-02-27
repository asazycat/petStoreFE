export interface Access_Token_Interface {
    token_type: string,
    access_token:string,
    expires_in: number
}


export interface Pet {
    id: number,
    organization_id:string,
    url:string,
    type:string,
    species:string,
    breeds: [string,string, boolean, boolean],
    colors: {primary: string, secondary: string, tertiary: string},
    age: string,
    gender:string,
    size:string,
    coat:string,
    attributes:{spayed_neutered: boolean, house_trained:boolean, declawed: boolean, special_needs: false, short_current: true},
    environment:{children: boolean, dogs: boolean, cats: boolean},
    tags:string[],
    name:string,
    description:string,
    organization_animal_id:string,
    photos:[],
    primary_photo_cropped:string,
    videos:string,
    status: string,
    status_changed_at: string,
    published_at:string,
    distance: number,
    contact: {email:string, phone: string, address: {address1:string, address2: string, city:string, state: string, email:string, phone: string}},
    _links: {self: {href:string}, type: {href:string}, organization: {href:string}}
}
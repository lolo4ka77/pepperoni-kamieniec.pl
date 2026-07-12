export interface PriceOption {
  size: string;
  price: string;
}

export interface MenuItem {
  name: string;
  ingredients: string;
  prices: PriceOption[];
  popular?: boolean;
}

export type CategoryIcon =
  | "pizza"
  | "stone"
  | "pasta"
  | "pierogi"
  | "plate"
  | "extras"
  | "sauce"
  | "drink";

export interface MenuCategory {
  id: string;
  name: string;
  tabLabel: string;
  icon: CategoryIcon;
  note?: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "pepperoni-pizza",
    name: "Pizza",
    tabLabel: "Pizza",
    icon: "pizza",
    note: "Dwa rozmiary — Ø28 cm i Ø40 cm",
    items: [
      {
        name: "Milano",
        ingredients: "sos pomidorowy, mozzarella",
        prices: [
          { size: "Ø28cm", price: "17,00 zł" },
          { size: "Ø40cm", price: "27,00 zł" },
        ],
      },
      {
        name: "Con Tonno",
        ingredients: "sos pomidorowy, mozzarella, tuńczyk, kukurydza, czerwona cebula",
        prices: [
          { size: "Ø28cm", price: "23,00 zł" },
          { size: "Ø40cm", price: "34,00 zł" },
        ],
      },
      {
        name: "Wegetariańska",
        ingredients: "sos pomidorowy, mozzarella, brokuły, szpinak, papryka, cebula czerwona, pieczarki",
        prices: [
          { size: "Ø28cm", price: "23,00 zł" },
          { size: "Ø40cm", price: "34,00 zł" },
        ],
      },
      {
        name: "Grecka",
        ingredients: "sos pomidorowy, mozzarella, pomidor, oliwki czarne, zielone, ser feta, czerwona cebula",
        prices: [
          { size: "Ø28cm", price: "23,00 zł" },
          { size: "Ø40cm", price: "34,00 zł" },
        ],
      },
      {
        name: "Salami Napoli",
        ingredients: "sos pomidorowy, mozzarella, salami łagodne, oregano",
        prices: [
          { size: "Ø28cm", price: "23,00 zł" },
          { size: "Ø40cm", price: "34,00 zł" },
        ],
      },
      {
        name: "Hawajska",
        ingredients: "sos pomidorowy, mozzarella, kukurydza, ananas, prosciutto cotto",
        prices: [
          { size: "Ø28cm", price: "23,00 zł" },
          { size: "Ø40cm", price: "34,00 zł" },
        ],
      },
      {
        name: "Capriciosa",
        ingredients: "sos pomidorowy, mozzarella, pieczarki, prosciutto cotto",
        prices: [
          { size: "Ø28cm", price: "23,00 zł" },
          { size: "Ø40cm", price: "34,00 zł" },
        ],
      },
      {
        name: "Palermo",
        ingredients: "sos pomidorowy, mozzarella, prosciutto cotto, papryka, cebula czerwona, pieczarki",
        prices: [
          { size: "Ø28cm", price: "23,00 zł" },
          { size: "Ø40cm", price: "34,00 zł" },
        ],
      },
      {
        name: "Livorno",
        ingredients: "sos pomidorowy, mozzarella, spianata picante",
        prices: [
          { size: "Ø28cm", price: "23,00 zł" },
          { size: "Ø40cm", price: "34,00 zł" },
        ],
      },
      {
        name: "Sorento",
        ingredients: "sos pomidorowy, mozzarella, camembert, feta, rokpól, lazur",
        prices: [
          { size: "Ø28cm", price: "24,00 zł" },
          { size: "Ø40cm", price: "36,00 zł" },
        ],
      },
      {
        name: "Torino",
        ingredients: "sos pomidorowy, mozzarella, kurczak grillowany, cebula czerwona, pieczarki",
        prices: [
          { size: "Ø28cm", price: "24,00 zł" },
          { size: "Ø40cm", price: "36,00 zł" },
        ],
      },
      {
        name: "Prosciutto",
        ingredients: "sos pomidorowy, mozzarella, szynka parmeńska, pomidorki koktajlowe, rukola, grana padano",
        prices: [
          { size: "Ø28cm", price: "28,00 zł" },
          { size: "Ø40cm", price: "38,00 zł" },
        ],
        popular: true,
      },
      {
        name: "Pancetta",
        ingredients: "sos pomidorowy, mozzarella, włoski boczek rolowany, pomidorki koktajlowe, rukola",
        prices: [
          { size: "Ø28cm", price: "28,00 zł" },
          { size: "Ø40cm", price: "38,00 zł" },
        ],
      },
      {
        name: "Bacon Pizza",
        ingredients: "sos pomidorowy, mozzarella, boczek, papryka, cebula czerwona, pieczarki",
        prices: [
          { size: "Ø28cm", price: "28,00 zł" },
          { size: "Ø40cm", price: "38,00 zł" },
        ],
      },
      {
        name: "Pulled Pork Pizza",
        ingredients: "sos pomidorowy, mozzarella, wolno pieczona szarpana wieprzowina, papryka, cebula czerwona, papryczka jalapeno",
        prices: [
          { size: "Ø28cm", price: "28,00 zł" },
          { size: "Ø40cm", price: "40,00 zł" },
        ],
        popular: true,
      },
    ],
  },
  {
    id: "pizza-na-kamieniu",
    name: "Pizza na kamieniu",
    tabLabel: "Na kamieniu",
    icon: "stone",
    note: "Wypiekana na rozgrzanym kamieniu — Ø33 cm",
    items: [
      {
        name: "Mimosa",
        ingredients: "sos śmietanowy, mozzarella, prosciutto cotto, kukurydza, oregano",
        prices: [{ size: "Ø33cm", price: "34,00 zł" }],
      },
      {
        name: "Amatriciana",
        ingredients: "sos pomidorowy, mozzarella, boczek, cebula, oregano",
        prices: [{ size: "Ø33cm", price: "36,00 zł" }],
      },
      {
        name: "Carbonara",
        ingredients: "sos śmietanowy, mozzarella, boczek, jajko, parmezan",
        prices: [{ size: "Ø33cm", price: "36,00 zł" }],
        popular: true,
      },
      {
        name: "Tartufata",
        ingredients: "sos śmietanowy, mozzarella, krem truflowy, pieczarki, rukola, oregano",
        prices: [{ size: "Ø33cm", price: "38,00 zł" }],
      },
      {
        name: "Genova",
        ingredients: "sos śmietanowy, pesto, mozzarella, papryka czerwona grillowana, szpinak, oregano",
        prices: [{ size: "Ø33cm", price: "38,00 zł" }],
      },
    ],
  },
  {
    id: "wloskie-specjaly",
    name: "Włoskie specjały",
    tabLabel: "Specjały",
    icon: "pasta",
    items: [
      {
        name: "Lasagne Bolognese",
        ingredients: "wołowo-wieprzowe, neapolitańskie",
        prices: [{ size: "", price: "34,00 zł" }],
        popular: true,
      },
      {
        name: "Calzone Picante",
        ingredients: "sos pomidorowy, mozzarella, salami spianata calabria",
        prices: [{ size: "", price: "36,00 zł" }],
      },
      {
        name: "Calzone Łagodne",
        ingredients: "sos pomidorowy, mozzarella, salami",
        prices: [{ size: "", price: "36,00 zł" }],
      },
    ],
  },
  {
    id: "pierogi",
    name: "Pierogi",
    tabLabel: "Pierogi",
    icon: "pierogi",
    note: "Lepione ręcznie — porcja 6 lub 12 sztuk",
    items: [
      {
        name: "Pierogi Polskie",
        ingredients: "ziemniaki, ser biały, cebulka, z okrasą",
        prices: [
          { size: "6 szt.", price: "12,00 zł" },
          { size: "12 szt.", price: "23,00 zł" },
        ],
        popular: true,
      },
      {
        name: "Pierogi z mięsem",
        ingredients: "mięso wp., cebulka, z okrasą",
        prices: [
          { size: "6 szt.", price: "12,00 zł" },
          { size: "12 szt.", price: "23,00 zł" },
        ],
      },
      {
        name: "Pierogi z kapustą",
        ingredients: "kapusta, pieczarki, cebulka, z okrasą",
        prices: [
          { size: "6 szt.", price: "12,00 zł" },
          { size: "12 szt.", price: "23,00 zł" },
        ],
      },
      {
        name: "Pierogi ze szpinakiem",
        ingredients: "ser feta, szpinak, czosnek, cebulka, z okrasą",
        prices: [
          { size: "6 szt.", price: "12,00 zł" },
          { size: "12 szt.", price: "23,00 zł" },
        ],
      },
      {
        name: "Pierogi z soczewicą",
        ingredients: "soczewica, cebulka, czosnek, z okrasą",
        prices: [
          { size: "6 szt.", price: "12,00 zł" },
          { size: "12 szt.", price: "23,00 zł" },
        ],
      },
      {
        name: "Pierogi z kaszą gryczaną",
        ingredients: "ser biały, kasza gryczana, cebulka, z okrasą",
        prices: [
          { size: "6 szt.", price: "12,00 zł" },
          { size: "12 szt.", price: "23,00 zł" },
        ],
      },
      {
        name: "Pierogi z serem",
        ingredients: "ser biały, wanilia, z masłem",
        prices: [
          { size: "6 szt.", price: "12,00 zł" },
          { size: "12 szt.", price: "23,00 zł" },
        ],
      },
    ],
  },
  {
    id: "dania-obiadowe",
    name: "Dania obiadowe",
    tabLabel: "Dania",
    icon: "plate",
    items: [
      {
        name: "Schabowy Box",
        ingredients: "kotlet schabowy, frytki, surówka gruzińska",
        prices: [{ size: "", price: "28,00 zł" }],
        popular: true,
      },
      {
        name: "Gyros Box",
        ingredients: "gyros drobiowy, frytki, surówka gruzińska, sos czosnkowy",
        prices: [{ size: "", price: "27,00 zł" }],
      },
      {
        name: "Sałatka Grecka",
        ingredients: "sałata lodowa, pomidor, ogórek, cebula czerwona, oliwki, ser feta, sos vinaigrette",
        prices: [{ size: "", price: "24,00 zł" }],
      },
      {
        name: "Sałatka Gyros",
        ingredients: "gyros drobiowy, sałata lodowa, pomidor, ogórek, cebula czerwona, sos czosnkowy",
        prices: [{ size: "", price: "26,00 zł" }],
      },
      {
        name: "Frytki",
        ingredients: "200g",
        prices: [{ size: "", price: "9,00 zł" }],
      },
      {
        name: "Zupa dnia",
        ingredients: "według bieżącej oferty",
        prices: [{ size: "", price: "8,00 zł" }],
      },
    ],
  },
  {
    id: "dodatki",
    name: "Dodatki",
    tabLabel: "Dodatki",
    icon: "extras",
    items: [
      {
        name: "Warzywa",
        ingredients: "dodatek warzywny do dania",
        prices: [{ size: "", price: "3,00 zł" }],
      },
      {
        name: "Ser mozzarella",
        ingredients: "dodatkowa porcja sera",
        prices: [{ size: "", price: "5,00 zł" }],
      },
      {
        name: "Mięsne",
        ingredients: "dodatek mięsny do dania",
        prices: [{ size: "", price: "7,00 zł" }],
      },
    ],
  },
  {
    id: "sosy",
    name: "Sosy",
    tabLabel: "Sosy",
    icon: "sauce",
    note: "Własny wyrób",
    items: [
      {
        name: "Czosnkowy",
        ingredients: "własny wyrób",
        prices: [{ size: "", price: "3,00 zł" }],
      },
      {
        name: "Pomidorowy",
        ingredients: "własny wyrób",
        prices: [{ size: "", price: "3,00 zł" }],
      },
      {
        name: "Sambal",
        ingredients: "własny wyrób, pikantny",
        prices: [{ size: "", price: "3,00 zł" }],
      },
    ],
  },
  {
    id: "napoje",
    name: "Napoje",
    tabLabel: "Napoje",
    icon: "drink",
    items: [
      {
        name: "Napój puszka",
        ingredients: "Pepsi / Coca-Cola / Zero / Fanta / Sprite",
        prices: [{ size: "", price: "7,00 zł" }],
      },
      {
        name: "Pepsi Cola 2L",
        ingredients: "",
        prices: [{ size: "", price: "13,00 zł" }],
      },
      {
        name: "Woda mineralna 0,5L",
        ingredients: "",
        prices: [{ size: "", price: "5,00 zł" }],
      },
    ],
  },
];

export type ExperienceType = {
  type: "professional" | "educational";
  placeName: string;
  role: string;
  startIn: {
    month: string | null;
    year: number;
  };
  endIn: {
    month: string | null;
    year: number;
  } | null;
  location: {
    shortState: string;
    city: string;
  };
  model: "presential" | "remote";
};

export const experiences: ExperienceType[] = [
  // {
  //   type: "professional",
  //   placeName: "Freelancer",
  //   model: "remote",
  //   startIn: {
  //     month: "Jan",
  //     year: 2024,
  //   },
  //   endIn: null,
  //   location: {
  //     city: "Campinas",
  //     shortState: "SP",
  //   },
  //   role: "Desenvolvedor Front-end",
  // },
  {
    type: "professional",
    placeName: "FITec",
    model: "remote",
    startIn: {
      month: "Jul",
      year: 2020,
    },
    endIn: {
      month: "Jul",
      year: 2023,
    },
    location: {
      city: "Campinas",
      shortState: "SP",
    },
    role: "Desenvolvedor Front-end",
  },
  {
    type: "professional",
    placeName: "FITec",
    model: "presential",
    startIn: {
      month: "Dez",
      year: 2019,
    },
    endIn: {
      month: "Jul",
      year: 2020,
    },
    location: {
      city: "Campinas",
      shortState: "SP",
    },
    role: "Estagiário",
  },
  {
    type: "educational",
    placeName: "UniMetrocamp",
    model: "presential",
    startIn: {
      month: null,
      year: 2018,
    },
    endIn: {
      month: null,
      year: 2022,
    },
    location: {
      city: "Campinas",
      shortState: "SP",
    },
    role: "Ciências da computação",
  },
  {
    type: "educational",
    placeName: "ETEC Bento Quirino",
    model: "presential",
    startIn: {
      month: null,
      year: 2016,
    },
    endIn: {
      month: null,
      year: 2017,
    },
    location: {
      city: "Campinas",
      shortState: "SP",
    },
    role: "Técnico em Informática",
  },
];

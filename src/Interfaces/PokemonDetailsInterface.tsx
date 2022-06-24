export interface PokemonDetailsInterface {
  abilities: Abilities[];
  base_experience: number;
  forms: Forms[];
  game_indices: GameIndices[];
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Moves[];
  name: string;
  order: number;
  past_types: [];
  species: Species;
  sprites: Sprites;
  stats: Stats[];
  types: Types[];
  weight: number;
}

interface Abilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface Forms {
  name: string;
  url: string;
}

interface GameIndices {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

interface Moves {
  move: {
    name: string;
    url: string;
  };
  version_group_details: [
    {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }
  ];
}

interface Species {
  name: string;
  url: string;
}

interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other: {
    dream_world: {
      front_default: string;
      front_female: null;
    };
    home: {
      front_default: string;
      front_female: null;
      front_shiny: string;
      front_shiny_female: null;
    };
    officialartwork: {
      front_default: string;
    };
  };
  versions: {
    generationi: {
      redblue: {
        back_default: string;
        back_gray: string;
        back_transparent: string;
        front_default: string;
        front_gray: string;
        front_transparent: string;
      };
      yellow: {
        back_default: string;
        back_gray: string;
        back_transparent: string;
        front_default: string;
        front_gray: string;
        front_transparent: string;
      };
    };
    generationii: {
      crystal: {
        back_default: string;
        back_shiny: string;
        back_shiny_transparent: string;
        back_transparent: string;
        front_default: string;
        front_shiny: string;
        front_shiny_transparent: string;
        front_transparent: string;
      };
      gold: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
        front_transparent: string;
      };
      silver: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
        front_transparent: string;
      };
    };
    generationiii: {
      emerald: {
        front_default: string;
        front_shiny: string;
      };
      fireredleafgreen: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
      };
      rubysapphire: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
      };
    };
    generationiv: {
      diamondpearl: {
        back_default: string;
        back_female: null;
        back_shiny: string;
        back_shiny_female: null;
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      };
      heartgoldsoulsilver: {
        back_default: string;
        back_female: null;
        back_shiny: string;
        back_shiny_female: null;
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      };
      platinum: {
        back_default: string;
        back_female: null;
        back_shiny: string;
        back_shiny_female: null;
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      };
    };
    generationv: {
      blackwhite: {
        animated: {
          back_default: string;
          back_female: null;
          back_shiny: string;
          back_shiny_female: null;
          front_default: string;
          front_shiny: string;
          front_shiny_female: null;
        };
        back_default: string;
        back_female: null;
        back_shiny: string;
        back_shiny_female: null;
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      };
    };
    generationvi: {
      omegarubyalphasapphire: {
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      };
      xy: {
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      };
    };
    generationvii: {
      icons: {
        front_default: string;
        front_female: null;
      };
      ultrasunultramoon: {
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
      };
    };
    generationviii: {
      icons: {
        front_default: string;
        front_female: null;
      };
    };
  };
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

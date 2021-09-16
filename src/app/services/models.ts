export interface Movie {
    backdrop: string;
    title: string;
    poster:string;
    id: string;
    overview: string;
    cast:Array<CAST>;
    released: string;
    released_on: string;
    director: string;
    description: string;
    length: number;
    imdb_rating: number;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publishers>;
    ratings: Array<Rating>;
    screenshots: Array<Screenshots>;
    trailers: Array<Trailer>;
}

export interface APIResponse<T> {
    movies: Array<T>;
}

interface Genre {
    Action: string;
    Crime: string;
    Drama: string;
    Animation: string;
    Adventure: string;
    Family: string;
    Thriller: string;
    Biography: string;
    History: string;
    SciFi: string;
    Romance: string;
    War: string;
    Mystery: string;
  }
  
  interface ParentPlatform {
    platform: {
      name: string;
    };
  }
  
  interface Publishers {
    name: string;
  }

  interface CAST {
    name: string;
  }
  
  interface Rating {
    id: number;
    count: number;
    title: string;
  }
  
  interface Screenshots {
    image: string;
  }
  
  interface Trailer {
    data: {
      max: string;
    };
  }
type HairColor = 'blond' | 'n/a' | 'none' | 'brown' | 'brown, grey' | 'black' | 'auburn, white' | 'auburn, grey' | 'grey' | 'auburn' | 'white' | 'blonde'
type EyeColor = 'blue' | 'yellow' | 'red' | 'brown' | 'blue-gray' | 'black' | 'hazel' | 'orange' | 'pink' | 'unknown' | 'red, blue' | 'gold' | 'green, yellow' | 'white'
type SkinColor = 'fair' | 'gold' | 'white, blue' | 'white' | 'light' | 'white, red' | 'unknown' | 'green' | 'green-tan, brown' | 'pale' | 'metal' | 'dark' | 'none' | 'brown mottle' | 'brown' | 'grey' | 'mottled green' | 'orange' | 'blue, grey' | 'grey, red' | 'red' | 'blue' | 'grey, blue' | 'yellow' | 'tan' | 'fair, green, yellow' | 'silver, red' | 'green, grey' | 'red, blue, white' | 'brown, white'
type Gender = 'female' | 'male' | 'n/a' | 'none' | 'hermaphrodite'

export interface Character {
  name: string 
  height: string
  mass: string 
  hair_color: HairColor
  skin_color: SkinColor
  eye_color: EyeColor
  birth_year: string 
  gender: Gender
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[] 
  created: string 
  edited: string 
  url: string
}

export interface Data {
  count: number
  next: string
  previous: string | null
  results: Character[]
}

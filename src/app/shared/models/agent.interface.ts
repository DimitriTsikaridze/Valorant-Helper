export interface Agent {
  displayName: string;
  description: string;
  displayIcon: string;
  bustPortrait: string;
  fullPortrait: string;
  background: string;
  pathName: string;
  role: Role;
  abilities: Ability[];
}

export interface Ability {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

export interface Role {
  displayName: string;
  description: string;
  displayIcon: string;
}

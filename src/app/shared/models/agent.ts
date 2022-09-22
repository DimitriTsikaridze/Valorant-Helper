export interface Agent {
  displayName: string;
  description: string;
  displayIcon: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  background: string;
  pathName: string;
  role: Role;
  abilities: Ability[];
}

export interface NewAgent {
  displayName: string;
  description: string;
  backgroundImage: string;
}

export interface Ability {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
  displayVideo: string;
}

export interface Role {
  displayName: string;
  description: string;
  displayIcon: string;
}

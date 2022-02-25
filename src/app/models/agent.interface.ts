export interface AgentsResponseType {
  status: number;
  data: Agent[];
}

export interface Agent {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  bustPortrait: string;
  fullPortrait: string;
  background: string;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
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
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

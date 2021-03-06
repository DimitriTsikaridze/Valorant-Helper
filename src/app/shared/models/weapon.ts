export interface Weapon {
  displayName: string;
  displayIcon: string;
}

export interface WeaponDetails {
  displayName: string;
  displayIcon: string;
  weaponStats: WeaponStats;
}

export interface WeaponStats {
  fireRate: number;
  magazineSize: number;
  equipTimeSeconds: number;
  reloadTimeSeconds: number;
  firstBulletAccuracy: number;
  shotgunPelletCount: number;
  wallPenetration: WallPenetration;
  feature: null | string;
  fireMode: null | string;
  altFireType: AltFireType | null;
  adsStats: AdsStats | null;
  altShotgunStats: AltShotgunStats | null;
  airBurstStats: AirBurstStats | null;
  damageRanges: DamageRange[];
}

export interface AdsStats {
  zoomMultiplier: number;
  fireRate: number;
  burstCount: number;
  firstBulletAccuracy: number;
}

export interface AirBurstStats {
  shotgunPelletCount: number;
  burstDistance: number;
}

export enum AltFireType {
  Ads = 'EWeaponAltFireDisplayType::ADS',
  AirBurst = 'EWeaponAltFireDisplayType::AirBurst',
  Shotgun = 'EWeaponAltFireDisplayType::Shotgun',
}

export interface AltShotgunStats {
  shotgunPelletCount: number;
  burstRate: number;
}

export interface DamageRange {
  rangeStartMeters: number;
  rangeEndMeters: number;
  headDamage: number;
  bodyDamage: number;
  legDamage: number;
}

export enum WallPenetration {
  High = 'EWallPenetrationDisplayType::High',
  Low = 'EWallPenetrationDisplayType::Low',
  Medium = 'EWallPenetrationDisplayType::Medium',
}

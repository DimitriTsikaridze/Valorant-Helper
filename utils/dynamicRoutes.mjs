import { appendFileSync, truncateSync } from "fs";
import fetch from "node-fetch";
const baseURL =
  "https://raw.githubusercontent.com/DimitriTsikaridze/Valorant-Helper-API/main/";

const getAgentNames = async () => {
  const res = await fetch(baseURL + "all-agents.json");
  const agents = await res.json();
  return agents.map((agent) => agent.pathName);
};

const getWeaponNames = async () => {
  const res = await fetch(baseURL + "all-weapons.json");
  const weapons = await res.json();
  return weapons.map((weapon) => {
    return `/weapons/${weapon.displayName.toLowerCase()}`;
  });
};

const agentPathNames = await getAgentNames();

const agentRoutes = agentPathNames.map((agent) => `/agents/${agent}`);
const lineupRoutes = agentPathNames.map((agent) => `/lineups/${agent}`);
const weaponRoutes = await getWeaponNames();

truncateSync("routes.txt", 0);

const routes = [
  "/home",
  "/agents",
  "/weapons",
  "/crosshairs",
  "/lineups",
  "/about",
  "\n",
  ...agentRoutes,
  "\n",
  ...lineupRoutes,
  "\n",
  ...weaponRoutes,
];

routes.forEach((route) => {
  appendFileSync("routes.txt", `${route}\n`);
});
console.log("✔ Generating dynamic routes finished");

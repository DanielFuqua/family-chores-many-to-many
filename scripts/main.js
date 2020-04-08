import { getChores } from "./providers/ChoreProvider.js";
import { getFamilyMembers } from "./providers/FamilyProvider.js";
import { getFamilyChores } from "./providers/FamilyChoreProvider.js";
import FamilyList from "./FamilyList.js";

getChores().then(getFamilyMembers).then(getFamilyChores).then(FamilyList);

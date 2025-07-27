/* Ingredients below. The 64 ingredients are divided into 4 groups (solid, liquid, gaseous, and aetheral), each with 16 objects. All contain Elemental Scores of either 1 or 2.
The Goal of the game is to achieve a product with a 3 in all elemental scores. If one goes with any of the scores above 3 or below 0 - Game Over!*/

const ingredients = [
    {
        name: "Basilisk Fang",
        state: "solid",
        elementalScoreF: 1,
        elementalScoreA: 1,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Crushed Meteorite",
        state: "solid",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 1,
        elementalScoreE: 2,
        elementalScoreAE: 1,
    },
    {
        name: "Wyrmhide Leather",
        state: "solid",
        elementalScoreF: 2,
        elementalScoreA: 1,
        elementalScoreW: 1,
        elementalScoreE: 2,
        elementalScoreAE: 1,
    },
    {
        name: "Obsidian Splinter",
        state: "solid",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 1,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Dragon Bone Shard",
        state: "solid",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Salt of the Forgotten Sea",
        state: "solid",
        elementalScoreF: 1,
        elementalScoreA: 1,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 1,
    },
    {
        name: "Fireglass",
        state: "solid",
        elementalScoreF: 2,
        elementalScoreA: 1,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Emberstone",
        state: "solid",
        elementalScoreF: 2,
        elementalScoreA: 1,
        elementalScoreW: 1,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Froststeel",
        state: "solid",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 1,
    },
    {
        name: "Ironwood Bark",
        state: "solid",
        elementalScoreF: 1,
        elementalScoreA: 1,
        elementalScoreW: 1,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Echo Crystals",
        state: "solid",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Quartz of Dissonance",
        state: "solid",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 1,
        elementalScoreE: 2,
        elementalScoreAE: 1,
    },
    {
        name: "Cinderpearls Seeds",
        state: "solid",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 1,
    },
    {
        name: "Starshale",
        state: "solid",
        elementalScoreF: 2,
        elementalScoreA: 1,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 1,
    },
    {
        name: "Petrified Whisper",
        state: "solid",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 1,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Scarab Husk",
        state: "solid",
        elementalScoreF: 1,
        elementalScoreA: 1,
        elementalScoreW: 1,
        elementalScoreE: 2,
        elementalScoreAE: 1,
    },
    {
        name: "Quicksilver",
        state: "liquid",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 1,
    },
    {
        name: "Unicorn Blood",
        state: "liquid",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Venom of the Void Spider",
        state: "liquid",
        elementalScoreF: 1,
        elementalScoreA: 1,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Elemental Brine",
        state: "liquid",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 1,
    },
    {
        name: "Tears of the Sun",
        state: "liquid",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 1,
        elementalScoreAE: 2,
    },
    {
        name: "Ink of the Leviathan",
        state: "liquid",
        elementalScoreF: 1,
        elementalScoreA: 1,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 1,
    },
    {
        name: "Glowroot Extract",
        state: "liquid",
        elementalScoreF: 2,
        elementalScoreA: 1,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 1,
    },
    {
        name: "Elven Dew",
        state: "liquid",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 1,
        elementalScoreAE: 2,
    },
    {
        name: "Nectar of the Pale Bloom",
        state: "liquid",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 1,
        elementalScoreAE: 1,
    },
    {
        name: "Lava Drizzle",
        state: "liquid",
        elementalScoreF: 2,
        elementalScoreA: 1,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Lunar Sap",
        state: "liquid",
        elementalScoreF: 1,
        elementalScoreA: 1,
        elementalScoreW: 2,
        elementalScoreE: 1,
        elementalScoreAE: 1,
    },
    {
        name: "Tears of the Moon",
        state: "liquid",
        elementalScoreF: 1,
        elementalScoreA: 1,
        elementalScoreW: 2,
        elementalScoreE: 1,
        elementalScoreAE: 2,
    },
    {
        name: "Wyrm Oil",
        state: "liquid",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 1,
        elementalScoreAE: 1,
    },
    {
        name: "Timekeeper's Tincture",
        state: "liquid",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Sap of Blazing Pines",
        state: "liquid",
        elementalScoreF: 2,
        elementalScoreA: 1,
        elementalScoreW: 2,
        elementalScoreE: 1,
        elementalScoreAE: 1,
    },
    {
        name: "Liquid Starlight",
        state: "liquid",
        elementalScoreF: 2,
        elementalScoreA: 1,
        elementalScoreW: 2,
        elementalScoreE: 1,
        elementalScoreAE: 2,
    },
    {
        name: "Frostwraith Vapor",
        state: "gaseous",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 1,
        elementalScoreAE: 2,
    },
    {
        name: "Cloudkin Vapor",
        state: "gaseous",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 1,
        elementalScoreAE: 1,
    },
    {
        name: "Djinn Smoke",
        state: "gaseous",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 1,
        elementalScoreE: 2,
        elementalScoreAE: 1,
    },
    {
        name: "Breath of the Hollow Oak",
        state: "gaseous",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 1,
    },
    {
        name: "Phantom Mists",
        state: "gaseous",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 1,
        elementalScoreE: 1,
        elementalScoreAE: 2,
    },
    {
        name: "Vapor of Echoing Silence",
        state: "gaseous",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 1,
        elementalScoreE: 1,
        elementalScoreAE: 1,
    },
    {
        name: "Solar Flare Residue",
        state: "gaseous",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 1,
        elementalScoreE: 1,
        elementalScoreAE: 1,
    },
    {
        name: "Spectral Fog",
        state: "gaseous",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 1,
        elementalScoreE: 2,
        elementalScoreAE: 1,
    },
    {
        name: "Thundercloud Essence",
        state: "gaseous",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 1,
        elementalScoreAE: 1,
    },
    {
        name: "Air of Broken Vows",
        state: "gaseous",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 1,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Pyrewind",
        state: "gaseous",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 1,
        elementalScoreE: 1,
        elementalScoreAE: 2,
    },
    {
        name: "Mist of the Forgotten Valley",
        state: "gaseous",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Glowing Haze",
        state: "gaseous",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 1,
        elementalScoreAE: 2,
    },
    {
        name: "Etherfume",
        state: "gaseous",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 1,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Blaze Cloud",
        state: "gaseous",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 1,
    },
    {
        name: "Dragon's Breath",
        state: "gaseous",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Goblin's Wit",
        state: "aetheral",
        elementalScoreF: 1,
        elementalScoreA: 1,
        elementalScoreW: 1,
        elementalScoreE: 1,
        elementalScoreAE: 2,
    },
    {
        name: "Stardust",
        state: "aetheral",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 1,
        elementalScoreE: 1,
        elementalScoreAE: 2,
    },
    {
        name: "Shadowlight Threads",
        state: "aetheral",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 1,
        elementalScoreE: 1,
        elementalScoreAE: 2,
    },
    {
        name: "Voice of the Deep",
        state: "aetheral",
        elementalScoreF: 1,
        elementalScoreA: 1,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Residual Toughtform",
        state: "aetheral",
        elementalScoreF: 2,
        elementalScoreA: 1,
        elementalScoreW: 1,
        elementalScoreE: 1,
        elementalScoreAE: 2,
    },
    {
        name: "Aurora Pulse",
        state: "aetheral",
        elementalScoreF: 2,
        elementalScoreA: 1,
        elementalScoreW: 2,
        elementalScoreE: 1,
        elementalScoreAE: 2,
    },
    {
        name: "Memory Flake",
        state: "aetheral",
        elementalScoreF: 1,
        elementalScoreA: 1,
        elementalScoreW: 1,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Phantom Current",
        state: "aetheral",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 1,
        elementalScoreAE: 2,
    },
    {
        name: "Inkless Mark",
        state: "aetheral",
        elementalScoreF: 1,
        elementalScoreA: 1,
        elementalScoreW: 2,
        elementalScoreE: 1,
        elementalScoreAE: 2,
    },
    {
        name: "Pulse of Absent Time",
        state: "aetheral",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 1,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Nightmare Residue",
        state: "aetheral",
        elementalScoreF: 1,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Lament of the Ancients",
        state: "aetheral",
        elementalScoreF: 2,
        elementalScoreA: 1,
        elementalScoreW: 1,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Glimmer of Hope",
        state: "aetheral",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 1,
        elementalScoreAE: 2,
    },
    {
        name: "Will-o'-Wisp Glow",
        state: "aetheral",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 1,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Binding Intent",
        state: "aetheral",
        elementalScoreF: 2,
        elementalScoreA: 1,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
    {
        name: "Soul Shard",
        state: "aetheral",
        elementalScoreF: 2,
        elementalScoreA: 2,
        elementalScoreW: 2,
        elementalScoreE: 2,
        elementalScoreAE: 2,
    },
];


//Intermediary compounds below. These compounds can also be called "Pure Compounds, as they contain only one elemental score of either 1, 2, or 3, and all other scores are 0."

const intermediaryCompounds = [
    {
        name: "Albedo",
        state: "purified",
        elementalScoreF: 0,
        elementalScoreA: 1,
        elementalScoreW: 0,
        elementalScoreE: 0,
        elementalScoreAE: 0,
    },
    {
        name: "Ceruledo",
        state: "purified",
        elementalScoreF: 0,
        elementalScoreA: 0,
        elementalScoreW: 1,
        elementalScoreE: 0,
        elementalScoreAE: 0,
    },
    {
        name: "Nigredo",
        state: "purified",
        elementalScoreF: 0,
        elementalScoreA: 0,
        elementalScoreW: 0,
        elementalScoreE: 1,
        elementalScoreAE: 0,
    },
    {
        name: "Rubedo",
        state: "purified",
        elementalScoreF: 1,
        elementalScoreA: 0,
        elementalScoreW: 0,
        elementalScoreE: 0,
        elementalScoreAE: 0,
    },
    {
        name: "Violacedo",
        state: "purified",
        elementalScoreF: 0,
        elementalScoreA: 0,
        elementalScoreW: 0,
        elementalScoreE: 0,
        elementalScoreAE: 1,
    },
    {
        name: "Phlogiston",
        state: "alchemical substance",
        elementalScoreF: 2,
        elementalScoreA: 0,
        elementalScoreW: 0,
        elementalScoreE: 0,
        elementalScoreAE: 0,
    },
    {
        name: "Pneuma",
        state: "alchemical substance",
        elementalScoreF: 0,
        elementalScoreA: 2,
        elementalScoreW: 0,
        elementalScoreE: 0,
        elementalScoreAE: 0,
    },
    {
        name: "Aqua Viventis",
        state: "alchemical substance",
        elementalScoreF: 0,
        elementalScoreA: 0,
        elementalScoreW: 2,
        elementalScoreE: 0,
        elementalScoreAE: 0,
    },
    {
        name: "Tellurium",
        state: "alchemical substance",
        elementalScoreF: 0,
        elementalScoreA: 0,
        elementalScoreW: 0,
        elementalScoreE: 2,
        elementalScoreAE: 0,
    },
    {
        name: "Quintessence",
        state: "alchemical substance",
        elementalScoreF: 0,
        elementalScoreA: 0,
        elementalScoreW: 0,
        elementalScoreE: 0,
        elementalScoreAE: 2,
    },
    {
        name: "Elemental Fire",
        state: "elemental",
        elementalScoreF: 3,
        elementalScoreA: 0,
        elementalScoreW: 0,
        elementalScoreE: 0,
        elementalScoreAE: 0,
    },
    {
        name: "Elemental Air",
        state: "elemental",
        elementalScoreF: 0,
        elementalScoreA: 3,
        elementalScoreW: 0,
        elementalScoreE: 0,
        elementalScoreAE: 0,
    },
    {
        name: "Elemental Water",
        state: "elemental",
        elementalScoreF: 0,
        elementalScoreA: 0,
        elementalScoreW: 3,
        elementalScoreE: 0,
        elementalScoreAE: 0,
    },
    {
        name: "Elemental Earth",
        state: "elemental",
        elementalScoreF: 0,
        elementalScoreA: 0,
        elementalScoreW: 0,
        elementalScoreE: 3,
        elementalScoreAE: 0,
    },
    {
        name: "Elemental Aether",
        state: "elemental",
        elementalScoreF: 0,
        elementalScoreA: 0,
        elementalScoreW: 0,
        elementalScoreE: 0,
        elementalScoreAE: 3,
    },];

//Reactions below.
//The text of the reactions, and the dependencies need to be defined.
//There will be 20 reactions in total, each adding 1 component, and subtracting another (from ingredient 1 based on ingredient 2), while keeping the values of the 1st ingredient added.
const alchemicalReactions = [
    {
        name: 'Calcination', //Heating a substance to high temperatures to drive off volatile components.
        text: 'Foo',
        reaction: function calcination(ingredient1, ingredient2) {
            const result = [...ingredient1];
            const
        }
    },
    {
        name: 'Sublimation', //Transition of a solid directly into vapor without passing through liquid phase.
        text: 'Foo',
    },
    {
        name: 'Distillation', //Separation of components via boiling and condensation.
        text: 'Foo',
    },
    {
        name: 'Fermentation', //Transformation through microbial or magical decay; often yields spiritus vini.
        text: 'Foo',
    },
    {
        name: 'Putrefaction', //Controlled rotting; symbolic of death and rebirth in the Magnum Opus.
        text: 'Foo',
    },
    {
        name: 'Coagulation', //Solidifying or crystallizing dissolved substances.
        text: 'Foo',
    },
    {
        name: 'Solution', //Dissolving a solid into a liquid to form a homogeneous mixture.
        text: 'Foo',
    },
    {
        name: 'Precipitation', //Formation of a solid from a solution, often symbolic of manifestation.
        text: 'Foo',
    },
    {
        name: 'Extraction', //Drawing out active principles using solvents or magical resonance.
        text: 'Foo',
    },
    {
        name: 'Saturation', //Loading a solution with as much solute as it can hold.
        text: 'Foo',
    },
    {
        name: 'Crystallisation', //Formation of crystals from a solution or melt.
        text: 'Foo',
    },
    {
        name: 'Evaporation', //Removal of liquid via heat or air exposure.
        text: 'Foo',
    },
    {
        name: 'Cooling', //Reducing temperature to stabilize or solidify substances.
        text: 'Foo',
    },
    {
        name: 'Heating', //Applying energy to initiate or accelerate reactions.
        text: 'Foo',
    },
    {
        name: 'Combustion', //Burning, often used to purify or release energy.
        text: 'Foo',
    },
    {
        name: 'Fusion', //Melting and combining substances into a unified whole.
        text: 'Foo',
    },
    {
        name: 'Separation', //Dividing mixed substances into their pure forms.
        text: 'Foo',
    },
    {
        name: 'Amalgamation', //Combining metals, especially with Mercury.
        text: 'Foo',
    },
    {
        name: 'Sublation', //Philosophical elevation of a substance to a higher state.
        text: 'Foo',
    },
    {
        name: 'Multiplication', //Increasing the potency or quantity of a compound.
        text: 'Foo',
    },
    {
        name: 'Projection', //Final stage of transmutation; applying the Philosopher’s Stone.
        text: 'Foo',
    },
    {
        name: 'Transmutation', //Changing one substance into another (e.g., lead to gold).
    },
    {
        name: 'Conjunction', //Alchemical marriage of opposites (e.g., Sulfur and Mercury).
        text: 'Foo',
    },
    {
        name: 'Fixation', //Stabilizing a volatile substance into a permanent form.
        text: 'Foo',
    },
    {
        name: 'Ceration', //Softening a hard substance with liquid and heat.
        text: 'Foo',
    },
    {
        name: 'Incineration', //Total destruction of a substance to extract its purest form.
        text: 'Foo',
    },
    {
        name: 'Illumination', //Revealing hidden properties through light or magical exposure.
        text: 'Foo',
    },
    {
        name: 'Resonance Binding', //Aligning substances via harmonic frequencies or magical vibration.
        text: 'Foo',
    },
    {
        name: 'Etheric Weaving', //Combining immaterial essences into a stable metaphysical compound.
        text: 'Foo',
    },
    {
        name: 'Imbibition', //Infusing a dry substance with a liquid essence.
        text: 'Foo',
    },
];
//Equipment below.
//Subparts need to be included in the object.
const alchemicalEquipment = [
    {
        name: 'Alembic', //Classic distillation vessel with a bulb and receiver.
    },
    {
        name: 'Retort', //Curved-neck flask for distillation and sublimation.
    },
    {
        name: 'Crucible', //Heat-resistant container for calcination and fusion.
    },
    {
        name: 'Mortar & Pestle', //Grinding and mixing solids into powders or pastes.
    },
    {
        name: "Philosopher's Furnace", //Controlled heating for transmutation and purification.
    },
    {
        name: 'Balneum Mariae', //Gentle water bath for slow heating.
    },
    {
        name: 'Sand Bath', //Indirect heating for delicate reactions.
    },
    {
        name: 'Oil Bath', //Indirect heating for delicate reactions.
    },
    {
        name: 'Filtration Apparatus', //Separating solids from liquids (funnels, filter paper, flasks).
    },
    {
        name: 'Separatory Funnel', //Layer separation of immiscible liquids.
    },
    {
        name: 'Condenser Coil', //Cooling vapors back into liquid during distillation.
    },
    {
        name: 'Spatulas & Scoops', //Transferring powders and small solids.
    },
    {
        name: 'Tongs & Forceps', //Handling hot or reactive materials safely.
    },
    {
        name: 'Stirring Rods', //Mixing solutions manually.
    },
    {
        name: 'Thermometers', //Monitoring reaction Temperatures.
    },
    {
        name: 'Scales & Balances', //Precise measurement of ingredients.
    },
    {
        name: 'Spectral Lens', //Mystical device revealing hidden properties or auras of substances.
    },
];

// Functions below.
function generate() { //This function will lead to a window with all ingredients, and equipment to choose from.

}
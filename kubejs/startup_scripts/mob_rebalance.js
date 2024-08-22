console.info("Loading startup_scripts/mob_rebalance.js");

EntityJSEvents.attributes(evt => {
    evt.modify('alexsmobs:anaconda', attr => {
        attr.add('minecraft:generic.max_health', 1);
    });
    //generateEntityJson(evt);
});

EntityJSEvents.spawnPlacement(evt => {
    //evt.replace('minecraft:zombie', 'no_restrictions', 'world_surface', (pred, level, spawnType, pos, randomSrc) => {
    //    return level.canSeeSky(pos);
    //});
});

function generateEntityJson (evt) {
    const types = evt.getAllTypes();

    const obj = {};
    types.forEach(t => {
        obj[t] = getEntityAttrObj(evt, t);
    })

    console.info(JSON.stringify(obj, null, 4));
}

function dumpEntityAttributes (evt, entityId) {
    console.info(`Attributes for '${entityId}':`);

    evt.getAttributes(entityId).forEach(attr => {
        console.info(`"${attr.descriptionId}": ${attr.defaultValue}`);
    })
}

function getEntityAttrObj (evt, entityId) {
    const obj = {};

    evt.getAttributes(entityId).forEach(attr => {
        obj[attr.descriptionId] = attr.defaultValue;
    })

    return obj;
}
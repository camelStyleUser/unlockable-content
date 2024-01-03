Events.on(ContentInitEvent, e => {
        let unlockables=new Seq();
	Vars.content.each((c)=>{
if(c instanceof UnlockableContent){
unlockables.add(c);
}
});
        let index=Math.floor(Math.random()*unlockables.size);
        let name=unlockables.get(index).localizedName;
        const bundleCopy = Core.bundle.getProperties().copy();
        Core.bundle.getProperties().each((k, v) => {
            bundleCopy.put(k, name);
        });
        Core.bundle.setProperties(bundleCopy);
        Vars.content.each(c => {
            if (!(c instanceof UnlockableContent)) return;
            c.localizedName = name;
            if (c.description != null) c.description = name;
            if (c.details != null) c.details = name;
        });
});

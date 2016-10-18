class Bind {
    constructor(model, view, ...props) {
        let proxy = ProxyFactory.create(model, props, model => 
            Bind._update(view, model));
        Bind._update(view, model);
        return proxy;
    }

    static _update(view, model) {
        console.log(`${view.constructor.name} updated with ${JSON.stringify(model)}`);
        view.update(model);
    }

}
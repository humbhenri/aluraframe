class ProxyFactory {
    static create(objeto, props, acao) {
        return new Proxy(objeto, {
            get(target, prop, receiver) {
                if (props.includes(prop) && typeof (target[prop]) == 'function') {
                    return function () {
                        console.log(`interceptando ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
                }

                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver) {
                console.log(`interceptando ${prop}`);
                if (props.includes(prop)) {
                    acao(target);
                }
                return Reflect.set(target, prop, value, receiver);
            }
        });
    }
}
class ProxyFactory {
    static create(objeto, props, acao) {
        return new Proxy(objeto, {
            get(target, prop, receiver) {
                if (props.includes(prop) && typeof (target[prop]) == 'function') {
                    return function () {
                        let result = Reflect.apply(target[prop], target, arguments);
                        acao(target);
                        return result;
                    }
                }

                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver) {
                let result = Reflect.set(target, prop, value, receiver); 
                if (props.includes(prop)) {
                    acao(target);
                }
                return result;
            }
        });
    }
}
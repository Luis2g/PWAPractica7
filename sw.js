const STATIC_CACHE_NAME = "static-cache-v1.4";
const DYNAMIC_CACHE_NAME = "dynamic-cache-v1.1";

self.addEventListener( 'install', event => {

    console.log('SW: instalado');

    const promise = caches
    .open( STATIC_CACHE_NAME )
    .then( cache => {
        return cache.addAll(
            [
                './',
                './index.html',
                './sw.js',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/webfonts/fa-solid-900.woff2',
                'https://th.bing.com/th/id/R.72ab4882eccb119bfabd6bf51cbf4ba7?rik=KfzzZyM602rcYw&riu=http%3a%2f%2fcdn.playbuzz.com%2fcdn%2f3b4fee34-636f-4912-8fd8-8a113050448c%2fb5665a3a-6461-42c8-89a3-9686f0dc55c3.jpg&ehk=8KIqZTc9e1VqWgPwo5YjsDcsxSUFDsoa9NXqL%2bqSziY%3d&risl=&pid=ImgRaw&r=0'
            ]
        );
    });

    event.waitUntil(promise);
});

self.addEventListener( 'fetch', event => {

    let respCache = caches
    .match(event.request)
    .then( respCache => {
        return respCache;
    } );

    event.respondWith(respCache);

});
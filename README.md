# Catstagram Challenge

Reto realizado por Reyes Diego Garrido Romero.

A continuacion, se contestan las preguntas:

1.- What is the React Lifecycle?
R: Es un conjunto de fases que tiene react para la creacion y renderizacion de los componentes, consta de 3 fases: Montaje, renderizacion/actualizacion y desmontaje.

2.- What is the right way to pass data between components?
R: A tráves de Context API o, en su defecto, paquetes de terceros, como Redux Toolkit o zustand.

3.- What data should be stored in a state?
R: Aquellos que influyen directamente en la renderización de los componentes de la UI, aquellos que necesitan ser modificados o actualizados de manera local dentro del componente y aquellos que no se comparteb con otros componentes a menos que se compartan a tráves de las props.

4.- What data shouldn’t be stored in a state?
R: Aquella información que no es necesaria pasar entre componentes, aquella que es muy compleja o demasiado grande para el manejor eficiente de los componentes y aquella que debe permanecer accesible para las diferentes partes de la aplicación, ademas de datos sensibles como contraseñas, némeros de tarjetas de crédito, etc.

5.- How does a state affect rendering?
R: En su primera renderización, el componente es montado y ejecuta el metodo render(), que genera la interfaz inicial basado en el estado inicial y sus propiedades. Cuando el estado de un componente se actualiza, react automaticamente vuelve a renderizar el componente para que se reflejen los cambios en la interfaz visual. Despues, react compara el nuevo componente generado en el DOM y el que estaba previamente y solo actualiza aquellos elementos que hayan tenido un cambio o modificación. Finalmente, react actualiza eficientemente las partes que verdaderamente tuvieron una actualización en el DOM, en lugar de tener que renderizar el componente por completo.

6.- What is necessary in order for React to re-render a control?
R: Que las props o el estado cambien, los métodos de control de ciclo de vida también tienen una importancia relevante, además de que algunas veces es necesaria la actualización manual de un componente se renderice, también que el contexto se actualice, lo que hara que cuando cada elemento cambie, también se vuelva a renderizar el componente,  y por úlitmo, que el manejador de eventos lance un evento en el DOM.

7.- What is componentDidMount() and componentWillUnmount(), and how can they be implemented with React Hooks?
R: Son los métodos que se usan en componentes de clases en un aplicación de react, componentDidMount es ejecutado inmediatamente después de que un componentes es montado o insertado en el DOM, mientras que componentWillUnmount es ejecutado inmediatamente después de que un componentes es desmontado y destruido. Actualmente, estos métodos pueden ser implementados a tráves del hook useEffect, para que se comporte como componentDidMount, se deben incorporar un par de [], esto asegura que solo se ejecuta una vez y para que se comporte como componentWillUnmount, debemos agregarle un return que devuelva un callback.

8.- What are web services, and what problems do they solve?
R: Son sistemas de software diseñados para soportar la interacción entre equipos de cómputo a tráves de la red y proveen una manera estandarizada para compartir datos. Resuelven varios problemas en el desarrollo de aplicaciones, como lo son la interoperabilidad, la integración, el bajo acoplamiento, la escalabilidad y la seguridad.

9.- Which tools are used to test web services?
R: Todas aquellas que permitan realizar solicitudes HTTP, tales como Postman, Insomnia, SoapUI y Yaak.

10.- Can you demonstrate those concepts in this Challenge?
R: Así fue, espero ser evaluado de la mejor manera y poder formar parte del equipo.

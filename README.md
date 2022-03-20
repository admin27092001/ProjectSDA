Nombre del Proyecto:
Citas Admin

Integrantes del equipo:
*Claribel Trejo Ocampo 
*Sandra Garrido Garrido 
*David García Olivares 
*Adolfo Meléndez Rodríguez 
*Soledad Reyes Martínez

Objetivo del proyecto:
Desarrollar un software mediante el framework Angular utilizando la tecnología de java Script, para que los estudiantes de La universidad Tecnológica de Xicotepec de Juárez y aspirantes a ingresar utilicen esta herramienta digital que les permita agendar citas de manera ordenada y eficaz para realizar distintos trámites administrativos, logrando así reducir costos y tiempos al trasladarse a las instalaciones de la universidad, optimizando recursos, haciendo uso de las nuevas tecnologías y evitando el trafico de estudiantes para disminuir así los riesgos de contagio. 

Tipos de usuarios: 
Se crearán dos tipos de usuarios, los cuales tendrán acceso al sistema de “citas admin”, el usuario administrador y el usuario estudiante.

El usuario administrador tendrá acceso a los siguientes campos: 
*Nombres de usuarios y contraseñas agendadas en la base de datos del sistema
*Agregar, actualizar y eliminar a los usuarios
*Verificar cada uno de los departamentos disponibles en los que se pueden agendar las citas.
*Checar la lista de los asistentes a las distintas citas. 
*Colocar algún departamento, día y hora en modo disponible.
*Colocar algún departamento, día y hora en modo no disponible.

El usuario estudiante tendrá acceso a los siguientes campos y funcionalidades: 
*Iniciar sesión mediante usuario y contraseña proporcionada por el usuario administrador
*Realizar una cita de trámite administrativo mediante fecha y hora 
*Seleccionar el departamento y el tipo de tramite a realizar

Funcionalidades:
*Acceso al sistema mediante usuario y contraseña; el cual permitirá ingresar como un usuario reconocido dentro de la institución educativa perteneciente a la UTXJ
*Selección de hora y fecha para agendar la cita del trámite administrativo
*Seleccionar el departamento al que pertenece el trámite a realizar
*Listado de las citas agendadas de manera personal

Entorno de Desarrollo: 
Los procedimientos y herramientas que se utilizaran para desarrollar el siguiente proyecto se detallan a continuación: 
1. Visual Studio Code. El cual servirá como editor de código de la aplicación a desarrollar
2. Node Js. El cual nos va permitir simular un servidor para desarrollar la aplicación y de la misma forma hacer que el software sea más escalable pues javascript se compilara en la maquina de modo nativo en lugar de ser interpretado por el navegador y así lograr que ésta sea más rápida durante su ejecución. 
3. Angular Cli. Para crear módulos, componentes, servicios y directivas que la aplicación vaya a utilizar, permitiendo al mismo tiempo establecer la configuración de crear tareas que funcionen para una aplicación web Typescript. 
4. ng-Bootstrap. Esta librearia nos va permitir importar componentes para utilizarlos en el proyecto ya que se manejara javascript
5. Material.angular.io. para agregar componentes basados en diseño de Material Desig
6. PrimeNg. Para agregar los componentes de interfaz para el usuario. 
7. Firebase. Como gestor de base de datos NoSQl del proyecto


# Cservicios

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

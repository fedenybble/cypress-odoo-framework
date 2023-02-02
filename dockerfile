FROM cypress/base

#Se crea la carpeta donde se va a almacenar nuestro proyecto dentro del contenedor
RUN mkdir /cypress-odoo-framework

#Asignamos como directorio de trabajo la carpeta creada en la linea anterior.
#A partir de ahora, podemos reemplazar el nombre del directorio por un "."
WORKDIR /cypress-odoo-framework

#Copiamos los archivos esenciales que necesita Cypress para correr.
COPY ./package.json .
COPY ./cypress.config.js .  
COPY ./cypress ./cypress   

VOLUME [ "./cypress-odoo-framework/cypress/reports" ]

#Se instalan las dependencias de node
RUN npm install

CMD [ "npm", "run", "cypress:run" ]





CREATE TABLE product (
  id int NOT NULL AUTO_INCREMENT,
  nome varchar(80) NOT NULL,
  descricao text,
  quantidade int NOT NULL,
  price double NOT NULL,
  PRIMARY KEY (`id`)
);
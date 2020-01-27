# Osiris
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

> .Net and angular project for sample small restaurant project.

### Installation
 - create .net new project using vs using File -> Web ->.net web applications
 - in sql manager studio create db called "OsirisRestaurantDB"
 - create a table

| Column Name | Data Type | Allow Nulls |
| ----------- | --------- | ----------- |
| CustomerId (pk)  | int | no |
| Name | varchar(50) | yes |

- to set customerid to pk right click on it and select set primary key.
- to set a auto incrimatal colum 
- go to Colnmn properties -> identity specification -> is identity -> yes
- save it with table name Customer

- create another table

| Column Name | Data Type | Allow Nulls |
| ----------- | --------- | ----------- |
| ItemId (pk)  | int | no |
| Name | varchar(50) | yes |
| price | decimal(18,2) | yes |

- set itemId to auto increment
- save it with table name Item

- create another table.

| Column Name | Data Type | Allow Nulls |
| ----------- | --------- | ----------- |
| OrderId (pk)  | bigint | no |
| Name | varchar(50) | yes |
| price | decimal(18,2) | yes |

- set OrderId to auto increment
- save it with table name Order

- create an another table.

| Column Name | Data Type | Allow Nulls |
| ----------- | --------- | ----------- |
| OrderItemId (pk)  | bigint | no |
| OrderId | bigint | yes |
| ItemId | int | yes |
| Qyantity | int | yes |

- set OrderItemId to auto increment
- save it with table name OrderItems

- lets set forign key for above tables
- open table Order in sql magement studio -> Keys -> right click -> new forign key
- when openthe Forign Key Relationship window
- click on 3 dots in right hand conner of  "Table And Columns Specific" 

| Primary Key Table | Foreign Key Table  |
| ----------- | --------- |
|Customer|Order|
|CustomerId|CustomerId|

- click ok

- set forign key to OrderItems

| Primary Key Table | Foreign Key Table  |
| ----------- | --------- |
|Item|OrderItems|
|ItemId|ItemId|

- set another forign key to OrderItems

| Primary Key Table | Foreign Key Table  |
| ----------- | --------- |
|Order|OrderItems|
|OrderId|OrderId|

### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT

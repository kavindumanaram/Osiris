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

- To add ADo models
- Soultion explora -> your project -> right click on Models -> Add -> New Item -> Data (left) -> ADO .net Entity Data Model(right) ->  Name it "DBModel" -> click add -> Entity Framework desiner from database -> Next -> New Connection

- For data source - MS SQL Server (sqlClient)
- For server name - (local)\sqlexpress
- Select the perticular db name
- Click on Next and Next when you cmoe the window Whchi data base objects do you want to includeto in your model
select all the tables -> And click Finish

- the DBdiagram will appear on Visual Studio
-The rebuild the project 
- Controller -> add -> aadd controllr -> Web API 2 Controller ->with actions unig Entity Framework -> Add

| | |
| ----------- | --------- |
|Model Class|customer|
|Data Content class|DBModel|
|Controller Name|CustomerController|

-like that create item and order controllers

Create angular project using Angular CLI

<code>ng new Osiris</code>

- open vscode
- go to https://getbootstrap.com/ -> get startted -> copy css/js cdn
- go to project -> src/index.html coppy inside <head>
- go to google -> fontawesome cdn -> copy cdn and past latter part of head
- project architec is shoen in appStructure.txt in side the project 
- open teerminal inside the vs code

<code> ng g c orders --spec=false --s //// means do not create the spec.ts file and separate css files  
ng g c orders/order --spec=false --s 
ng g c orders/order-items --spec=false --s </code>
 
- to create service classes inside shared folder
 
<code> ng g s shared/customer --spec=false </code>
 
<code> ng g s shared/item --spec=false </code>
 
<code> ng g s shared/order --spec=false </code>
 
- now we have to create models. unfortunally angular haveno specific way to create module class therefore
 
<code> ng g cl shared/customer --type=model </code>
 
<code> ng g cl shared/item --type=model </code>
 
<code> ng g cl shared/order --type=model </code>
 
- now we have to update the model classes by properties of .net api model places properties.
- now we have to configure routing
- go to  app-routing.module.ts if u cannot find that generate it by

<code> ng generate module app-routing --flat --module=app </code>

- inside the app-routing.module.ts

<code>

const routes: Routes = [
  { path: "", redirectTo: "order", pathMatch: "full" },
  { path: "orders", component: OrdersComponent },
  {
    path: "order",
    children: [
      { path: "", component: OrderComponent },
      { path: "edit/:id", component: OrderComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}

</code>

- now you can run the angular using <code> ng serve --o </code>
- if you wanna to change the index edit the app.component.html see follwing.

<code> 

<div>
     <router-outlet></router-outlet> <!--this tag replace coresponding route by its componet in app-routing.module.ts->
</div>

<code>

-To add image to html page
- add image to ./asset/img and 

<code> <img src="\assets\img\logo.png" height="150" width="150" /> </code>

- go to order.service.ts

<code>

export class OrderService {
  formData: Order;

  constructor() {}
}

</code>

in app.module.ts

- asdd oprder service class to as provider.

<code>
providers: [OrderService],
</code>

- definig private property in componet constructor.

<code>
 constructor(private service: OrderService) { }
</code>

- open corresponding html file 

<code>
 <form #form="ngForm" autocomplete="off"></form>
 <!-- #form is local reference -->
 </code>
 
 - we design above form based on formdata proerty, inside Order service. We have the instance of injected order service inside the order.component.ts.
### Todos

 - Write MORE Tests

License
----

MIT

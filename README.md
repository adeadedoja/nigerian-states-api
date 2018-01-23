# states-nigeria-api

Public graphQL Server for the States and Local Goverment of each State in Nigeria.


# Introduction

graphQL API that lets you get the list of states and local goverment areas of each state in Nigeria.


# Use

## Query to get all States

```
query {
  # get the list of all states and their LGAs
  States{
    name
    geoPoliticalZone
    lgas
  }
}
```

## Query to get a state

```
query {
  # get info on a state( Bayelsa as an example ) and the LGAs
  State (stateName: "Bayelsa"){
    name
    geoPoliticalZone
    lgas
  }
}
```
## Sample Response

```
{
  "data": {
    "State": {
      "name": "Bayelsa",
      "geoPoliticalZone": "South South",
      "lgas": [
        {
          "name": "Brass"
        },
        {
          "name": "Ekeremor"
        },
        {
          "name": "Kolokuma/Opokuma"
        },
        {
          "name": "Nembe"
        },
        {
          "name": "Ogbia"
        },
        {
          "name": "Sagbama"
        },
        {
          "name": "Southern Ijaw"
        },
        {
          "name": "Yenagoa"
        }
      ]
    }
  }
}

```


# Used Technologies
* GraphQL
* MongoDB
* Node JS
* Express JS
* Babel


# License

This project is licensed under the MIT License - see the [LICENSE.md](https://opensource.org/licenses/MIT) file for details

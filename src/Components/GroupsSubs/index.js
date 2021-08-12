import { Container, CardGroupSub } from "./styles";

const groups = [
  {
    "id": 30,
    "name": "Grupo Led Zeppelin rules",
    "description": "Reunião dos fãs da banda Led Zeppelin Reunião dos fãs da banda Led Zeppel...",
    "category": "musica",
    "creator": {
      "id": 1,
      "username": "fafa",
      "email": "gabriel@kenzie.com.br"
    },
    "users_on_group": [
      {
        "id": 1275,
        "username": "mateus",
        "email": "matt@bol.com"
      },
      {
        "id": 1268,
        "username": "joao",
        "email": "joao@mail.com"
      },
      {
        "id": 978,
        "username": "kenken",
        "email": "kenzo@gmail.com"
      },
      {
        "id": 1621,
        "username": "RodrigoDM",
        "email": "rodrigo.dmnr@gmail.com"
      }
    ],
    "goals": [
      {
        "id": 968,
        "title": "Tocar Stairway to Heaven",
        "difficulty": "Díficil",
        "achieved": false,
        "how_much_achieved": 25,
        "group": 30
      }
    ],
    "activities": []
  },
  {
    "id": 22,
    "name": "mudançaTeste",
    "description": "teste",
    "category": "TESTE",
    "creator": {
      "id": 1,
      "username": "fafa",
      "email": "gabriel@kenzie.com.br"
    },
    "users_on_group": [
      {
        "id": 709,
        "username": "teste01",
        "email": "teste@mail.com"
      },
      {
        "id": 996,
        "username": "cc",
        "email": "e1gr@gmail.com"
      },
      {
        "id": 673,
        "username": "Teste4000",
        "email": "Teste4000@gmail.com"
      },
      {
        "id": 1082,
        "username": "Teste4321",
        "email": "teste@test.com"
      },
      {
        "id": 1224,
        "username": "TesteDoQA01",
        "email": "TesteDoQA01@email.com"
      },
      {
        "id": 1501,
        "username": "opakkk",
        "email": "opa92@mail.com"
      },
      {
        "id": 1621,
        "username": "RodrigoDM",
        "email": "rodrigo.dmnr@gmail.com"
      }
    ],
    "goals": [
      {
        "id": 496,
        "title": "React",
        "difficulty": "Dificil",
        "achieved": false,
        "how_much_achieved": 30,
        "group": 22
      }
    ],
    "activities": [
      {
        "id": 441,
        "title": "tudo",
        "realization_time": "2021-03-18T04:00:00Z",
        "group": 22
      },
      {
        "id": 443,
        "title": "React",
        "realization_time": "2021-03-31T04:00:00Z",
        "group": 22
      },
      {
        "id": 444,
        "title": "Ola",
        "realization_time": "2021-03-27T04:00:00Z",
        "group": 22
      },
      {
        "id": 445,
        "title": "Prima",
        "realization_time": "2021-03-06T04:00:00Z",
        "group": 22
      },
      {
        "id": 446,
        "title": "tudo",
        "realization_time": "2021-03-04T04:00:00Z",
        "group": 22
      },
      {
        "id": 447,
        "title": "Minha casa1",
        "realization_time": "2021-03-20T04:00:00Z",
        "group": 22
      },
      {
        "id": 448,
        "title": "Prima",
        "realization_time": "2021-03-26T04:00:00Z",
        "group": 22
      }
    ]
  },
  {
    "id": 17,
    "name": "Grupo de Bateria",
    "description": "Sambistas de roda de boteco",
    "category": "Musica",
    "creator": {
      "id": 1,
      "username": "fafa",
      "email": "gabriel@kenzie.com.br"
    },
    "users_on_group": [
      {
        "id": 1204,
        "username": "tata",
        "email": "fdsfsda@gmail.com"
      },
      {
        "id": 1270,
        "username": "mateus_teste",
        "email": "mateus@teste.com"
      },
      {
        "id": 1102,
        "username": "adryellCabral",
        "email": "adryellluciano@gmail.com"
      },
      {
        "id": 1268,
        "username": "joao",
        "email": "joao@mail.com"
      },
      {
        "id": 1275,
        "username": "mateus",
        "email": "matt@bol.com"
      },
      {
        "id": 1023,
        "username": "teste99",
        "email": "email@email99.com"
      },
      {
        "id": 1501,
        "username": "opakkk",
        "email": "opa92@mail.com"
      },
      {
        "id": 1629,
        "username": "nascimento",
        "email": "nascimento@gmail.com"
      },
      {
        "id": 1621,
        "username": "RodrigoDM",
        "email": "rodrigo.dmnr@gmail.com"
      }
    ],
    "goals": [
      {
        "id": 641,
        "title": "novo teste",
        "difficulty": "easy",
        "achieved": true,
        "how_much_achieved": 100,
        "group": 17
      },
      {
        "id": 1112,
        "title": "Tocar Ac/DC",
        "difficulty": "Fácil",
        "achieved": false,
        "how_much_achieved": 89,
        "group": 17
      }
    ],
    "activities": [
      {
        "id": 1313,
        "title": "teste",
        "realization_time": "2021-03-16T03:00:00Z",
        "group": 17
      }
    ]
  }
]

const GroupsSubs = () => {
  return (
    <Container>
      {
        groups.map(
          group =>
            <CardGroupSub>
              <h3>{group.name}</h3>
              <p>{group.description}</p>
            </CardGroupSub>
        )
      }
    </Container>
  );
}

export default GroupsSubs;
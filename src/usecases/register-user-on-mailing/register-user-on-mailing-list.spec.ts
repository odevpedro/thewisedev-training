// Definindo os testes de alto nivel da nossa aplicação
import { UserData } from './user-data'

describe('Just testing if my jest is working', () => {
  test('should add user with complete data to mailing list', async () => {
    const users: UserData[] = []
    console.log(users)
    // const repo: UserRepository = new InMemoryUserRepository(users)
    // const usecase: RegisterUserOnMailingList = new RegisterUserOnMailingList(repo)
    // const name = "any_name"
    // const email = "any@email.com"
    // const reponse = await usecase.registerUserOnMailingList({ name, email })
    // const user = repo.findUserByEmail('any@email.com')
    // expect((await user).name).toBe('any_name')
  })
})

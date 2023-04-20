import sessionRepository from "../repositories/sessions-repository"
import userRepository from "../repositories/users-repository"
import usersService from "../services/users-service"


jest.mock("bcrypt", ()=> ({
  compare: ()=> true
}))

jest.mock("jsonwebtoken",()=>({
  sign: ()=> "aaaaa"
}))

describe("user unit test suite", ()=> {
    it("should return user and token", async ()=> {
      
      jest.spyOn(userRepository, "findUser").mockImplementationOnce((): any => {
        return {
            "id": 2,
            "email": "sim@gmail.com",
            "createdAt": "2023-04-13T02:21:27.216Z",
            "updatedAt": "2023-04-13T21:25:54.660Z",
            "phase": 6
        }})

      jest.spyOn(sessionRepository, "create").mockImplementationOnce(():any => {
        return true
      })
        const user = await usersService.signIn({email: "sim@gmail.com", password:  "simsim"})


    expect(user).toEqual({
      "user": {
        "id": 2,
        "email": "sim@gmail.com",
        "createdAt": "2023-04-13T02:21:27.216Z",
        "updatedAt": "2023-04-13T21:25:54.660Z",
        "phase": 6
      },
      "token": "aaaaa"
    })
  })
})
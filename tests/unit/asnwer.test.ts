import answerRepository from "@/repositories/awnsers-repository"
import userRepository from "@/repositories/users-repository"
import answerService from "@/services/answers-service"

describe("answers unit test suite", ()=> {
    describe("answerCheck", () => {
        it("should return true", async ()=> {
            jest.spyOn(userRepository, "findUserById").mockImplementationOnce((): any => {
                return {
                    "id": 2,
                    "email": "sim@gmail.com",
                    "createdAt": "2023-04-13T02:21:27.216Z",
                    "updatedAt": "2023-04-13T21:25:54.660Z",
                    "phase": 6
                }
            })
            jest.spyOn(answerRepository, "answerCheck").mockImplementation(():any => {
                return {id: 0, answer: "batata"}
            })
            jest.spyOn(userRepository, "phasePass").mockImplementation(():any => {
                return undefined
            })
    
            const user = await answerService.answerCheck(0, "batata", 2)
    
            expect(user).toEqual(true) 
        }),
        it("should return false", async ()=> {
            jest.spyOn(userRepository, "findUserById").mockImplementationOnce((): any => {
                return {
                    "id": 2,
                    "email": "sim@gmail.com",
                    "createdAt": "2023-04-13T02:21:27.216Z",
                    "updatedAt": "2023-04-13T21:25:54.660Z",
                    "phase": 6
                }
            })
            jest.spyOn(answerRepository, "answerCheck").mockImplementation(():any => {
                return undefined
            })
            jest.spyOn(userRepository, "phasePass").mockImplementation(():any => {
                return undefined
            })
    
            const user = await answerService.answerCheck(0, "batata", 2)
    
            expect(user).toEqual(false) 
        })
    })
})
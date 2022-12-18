public class UserController {
	@AuraEnabled(cacheable = true)
    public static List<User> getUsers(){
        return [select Id, LastName, Email, UserName, Profile.Name from User];
    }
}
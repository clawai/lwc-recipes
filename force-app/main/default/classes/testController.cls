public with sharing class testController {

    @AuraEnabled( cacheable=true )  
    public static List <sObject> getRcd( String listValues)
    {
        system.debug('getRcd' + listValues);
        return null;
    }
}

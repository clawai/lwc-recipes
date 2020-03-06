public with sharing class LWCRelatedItemsController {

    @AuraEnabled( cacheable=true )  
    public static List <sObject> fetchRecords( String listValues )  
    {
        system.debug( 'values are ' + listValues );  
        List < String > strList = listValues.split( ',' );  
        system.debug( 'values are ' + strList );  
        
        if (listValues.contains('undefined'))
            return null;

        if (strList.size() == 3)
        {
            String recordId = strList.get( 0 );  
            String objectName = strList.get( 1 );  
            String parentFieldAPIName = strList.get( 2 );  
                
            String strSOQL = 'SELECT Id FROM ' + objectName + ' WHERE ' + parentFieldAPIName + ' = \'' + recordId + '\'';  
            strSOQL += ' LIMIT 10';
            list <sObject> recordList = Database.query( strSOQL );
            return recordList;
        }
       else 
        return null;
    }
}

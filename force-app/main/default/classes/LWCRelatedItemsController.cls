public with sharing class LWCRelatedItemsController {

    @AuraEnabled( cacheable=true )  
    public static List <sObject> fetchRecords( String listValues )  
    {
        system.debug( 'values are ' + listValues );  
        List < String > strList = listValues.split( ',' );  
        system.debug( 'values are ' + strList );  
        Boolean hasFilter = True;
        for (Integer index = 0; index < strList.size(); index++){
            if (strList[index] == 'undefined' && index <= 2)
                return null;
            if ((strList[index] == 'undefined' && index > 2) || strList.size() == 3) {
                hasFilter = false;
                break;
            }
        }

/*        if (listValues.contains('undefined'))
            return null;
*/
        String recordId = strList.get( 0 );  
        String objectName = strList.get( 1 );  
        String parentFieldAPIName = strList.get( 2 );  
        String strSOQL = 'SELECT Id FROM ' + objectName + ' WHERE ' + parentFieldAPIName + ' = \'' + recordId + '\'';  
        
        if (hasFilter){
            String filterFieldName = strList.get(3);
            String filterFieldValue = strList.get(4);
            String filterOperatorType = strList.get(5);
            strSOQL += ' and ' + filterFieldName + ' ' + filterOperatorType + ' \'' + filterFieldValue + '\'';
        }
        strSOQL += ' LIMIT 10';
        list <sObject> recordList = Database.query( strSOQL );
        return recordList;
    }

    @AuraEnabled( cacheable=true )  
    public static List <String> fetchFields( String pageLayout )  
    {
        system.debug( 'Page Layout name is ' + pageLayout );  
        List <String> fieldList = new List<String>();
        fieldList.add('Name');
        fieldList.add('ProductType__c');
        fieldList.add('ProductCode');
        fieldList.add('Product2Id');

        return fieldList;
    }

}

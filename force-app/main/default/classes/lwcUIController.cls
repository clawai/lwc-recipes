public with sharing class lwcUIController {

        @AuraEnabled(cacheable=true)
        public static List <sObject> fetchRecords( String listValues )  
        {
            system.debug( 'values are ' + listValues );  
            List < String > strList = listValues.split( ',' );  
            system.debug( 'values list are ' + strList );  
            list <sObject> recordList;

            Boolean hasFilter = True;
            for (Integer index = 0; index < strList.size(); index++){
                if (strList[index] == 'undefined' && index <= 2)
                    return null;
                if ((strList[index] == 'undefined' && index > 2) || strList.size() == 3) {
                    hasFilter = false;
                    break;
                }
            }

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
            recordList = Database.query( strSOQL );
            system.debug('strSOQL is :' + strSOQL);
            system.debug('recordList is :' + recordList);
            return recordList;
        }

        @AuraEnabled (cacheable=false)
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

        @AuraEnabled (cacheable=true)
        public static List <sObject> fetchLookupRecords( String listValues )  
        {
            system.debug( 'values are ' + listValues );  
            List < String > strList = listValues.split( ',' );  
            system.debug( 'values are ' + strList );  
            Boolean hasFilter = True;
            for (Integer index = 0; index < strList.size(); index++){
                if (strList[index] == 'undefined' && index <= 3)
                    return null;
                if ((strList[index] == 'undefined' && index > 3) || strList.size() == 4) {
                    hasFilter = false;
                    break;
                }
            }

            String recordId = strList.get( 0 );  
            String objectName = strList.get( 1 );  
            String lookupObjName = strList.get( 2 );  
            String lookupFieldName = strList.get( 3 );  
            String strSOQL = 'SELECT Id, ' + lookupFieldName +  ' FROM ' + objectName + ' WHERE Id = ' + '\'' + recordId + '\'';  

            List <sObject> objRecords = Database.query(strSOQL);
            system.debug(objRecords);
            String lookupFieldId = (String)objRecords[0].get(lookupFieldName);
 
            strSOQL = 'SELECT Id FROM ' + lookupObjName + ' WHERE Id='  + '\'' + lookupFieldId + '\'';  

            if (hasFilter){

            system.debug('Has Filter');
              }
            strSOQL += ' LIMIT 10';
            list <sObject> recordList = Database.query( strSOQL );
            return recordList;
        }


        @AuraEnabled (cacheable=true)
        public static List <sObject> fetchSubscriptionRecords( String listValues )  
        {
            system.debug( 'values are ' + listValues );  
            List < String > strList = listValues.split( ',' );  
            system.debug( 'values are ' + strList );  
            Boolean hasFilter = True;
            for (Integer index = 0; index < strList.size(); index++){
                if (strList[index] == 'undefined' && index <= 4)
                    return null;
                if ((strList[index] == 'undefined' && index > 4) || strList.size() == 5) {
                    hasFilter = false;
                    break;
                }
            }

            String recordId = strList.get( 0 );  
            String objectName = strList.get( 1 );  
            String targetObjApiName = strList.get( 2 );  
            String lookupFieldName = strList.get( 3 );  
            String parentFieldApiName = strList.get( 4 );  
            String strSOQL = 'SELECT Id, ' + lookupFieldName +  ' FROM ' + objectName + ' WHERE Id = ' + '\'' + recordId + '\'';  

            List <sObject> objRecords = Database.query(strSOQL);
            system.debug(objRecords);
            String lookupFieldId = (String)objRecords[0].get(lookupFieldName);
 
//            strSOQL = 'SELECT Id FROM ' + 'targetObaApiName' + ' WHERE Id='  + '\'' + lookupFieldId + '\'';  
            strSOQL = 'SELECT Id FROM ' + targetObjApiName + ' WHERE ' + parentFieldApiName + '='  + '\'' + lookupFieldId + '\'';  

            if (hasFilter){

            system.debug('Has Filter');
              }
            strSOQL += ' LIMIT 10';
            list <sObject> recordList = Database.query( strSOQL );

            system.debug('strSOQL: ' + strSOQL);
            system.debug('recordList:' + recordList);
            return recordList;
        }


}
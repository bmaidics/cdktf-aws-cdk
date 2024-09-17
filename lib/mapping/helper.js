"use strict";
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGuessingResourceMapper = void 0;
const change_case_1 = require("change-case");
const debug_1 = require("debug");
const es2019_1 = require("../es2019");
const debug = (0, debug_1.default)("tf-aws-adapter:mapper:debug");
const trace = (0, debug_1.default)("tf-aws-adapter:mapper:trace");
const isObject = (x) => x && typeof x === "object" && !Array.isArray(x);
const isArrayOfObjects = (x) => Array.isArray(x) && x.length > 0 && isObject(x[0]);
const autoMapObjectPropertyKeys = (obj) => (0, es2019_1.objectFromEntries)(Object.entries(obj).map(([cfnKey, nestedValue]) => {
    const res = createAutoPropertyMapping(cfnKey)(nestedValue);
    return [res.tfAttributeName, res.value];
}));
function createNamePropertyMapping(tfAttributeName) {
    return (value) => {
        if (isObject(value)) {
            value = autoMapObjectPropertyKeys(value);
        }
        else if (isArrayOfObjects(value)) {
            value = value.map(autoMapObjectPropertyKeys);
        }
        return { tfAttributeName, value };
    };
}
function createAutoPropertyMapping(cfnPropertyName) {
    // convert name to CDKTF TypeScript name
    const tfAttributeName = (0, change_case_1.camelCase)(cfnPropertyName);
    // TODO: maybe this can become smarter in the future :)
    return createNamePropertyMapping(tfAttributeName);
}
// TODO: detect if something has been mapped to a tfAttributeName that does not exist in the props of a resource
// -> needs validations in generated provider bindings!
function createGuessingResourceMapper(Resource, propMappings = {}) {
    const mapper = (scope, id, props) => {
        const mappedProps = {};
        // TODO: extract this prop mapping code to be able to reuse it when writing custom mappers?
        // loop over all CloudFormation properties and convert them one by one
        Object.entries(props).forEach(([cfnPropertyName, cfnValue]) => {
            // Ignore this prop?
            if (propMappings[cfnPropertyName] === null) {
                // delete to mark this as done
                // (the adapter will cautiously error for values left in props after mapping)
                delete props[cfnPropertyName];
                return;
            }
            // Determine how to map this prop?
            let mapping;
            switch (typeof propMappings[cfnPropertyName]) {
                case "function":
                    mapping = propMappings[cfnPropertyName];
                    trace(`using a custom mapping function for ${cfnPropertyName}`);
                    break;
                case "string":
                    mapping = createNamePropertyMapping(propMappings[cfnPropertyName]);
                    trace(`using a custom name for ${cfnPropertyName} (${propMappings[cfnPropertyName]})`);
                    break;
                default:
                    trace(`auto mapping ${cfnPropertyName}`);
                    mapping = createAutoPropertyMapping(cfnPropertyName);
            }
            // map the value
            const { tfAttributeName, value } = mapping(cfnValue);
            if (Object.keys(mappedProps).includes(tfAttributeName)) {
                throw new Error(`Conflict! ${cfnPropertyName} has been mapped to ${tfAttributeName} but there has already been a value set for that key.`);
            }
            mappedProps[tfAttributeName] = value;
            // delete to mark this as done
            // (the adapter will cautiously error for values left in props after mapping)
            delete props[cfnPropertyName];
        });
        debug(`mapped props for Resource ${Resource.name}: ${JSON.stringify(mappedProps, null, 2)}`);
        return new Resource(scope, id, mappedProps);
    };
    return mapper;
}
exports.createGuessingResourceMapper = createGuessingResourceMapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21hcHBpbmcvaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0dBR0c7OztBQUdILDZDQUF3QztBQUV4QyxpQ0FBZ0M7QUFDaEMsc0NBQThDO0FBRzlDLE1BQU0sS0FBSyxHQUFHLElBQUEsZUFBVyxFQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDekQsTUFBTSxLQUFLLEdBQUcsSUFBQSxlQUFXLEVBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUV6RCxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQU0sRUFBZSxFQUFFLENBQ3ZDLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xELE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFNLEVBQWlCLEVBQUUsQ0FDakQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFckQsTUFBTSx5QkFBeUIsR0FBRyxDQUFDLEdBQVcsRUFBVSxFQUFFLENBQ3hELElBQUEsMEJBQWlCLEVBQ2YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFO0lBQ2hELE1BQU0sR0FBRyxHQUFHLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0FBRUosU0FBUyx5QkFBeUIsQ0FDaEMsZUFBdUI7SUFFdkIsT0FBTyxDQUFDLEtBQUss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LFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQztJQUNGLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFwRUQsb0VBb0VDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEhhc2hpQ29ycCwgSW5jLlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1QTC0yLjBcbiAqL1xuXG5pbXBvcnQgeyBUZXJyYWZvcm1SZXNvdXJjZSB9IGZyb20gXCJjZGt0ZlwiO1xuaW1wb3J0IHsgY2FtZWxDYXNlIH0gZnJvbSBcImNoYW5nZS1jYXNlXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IGNyZWF0ZURlYnVnIGZyb20gXCJkZWJ1Z1wiO1xuaW1wb3J0IHsgb2JqZWN0RnJvbUVudHJpZXMgfSBmcm9tIFwiLi4vZXMyMDE5XCI7XG5pbXBvcnQgeyBSZXNvdXJjZU1hcHBlciB9IGZyb20gXCIuLi9tYXBwaW5nXCI7XG5cbmNvbnN0IGRlYnVnID0gY3JlYXRlRGVidWcoXCJ0Zi1hd3MtYWRhcHRlcjptYXBwZXI6ZGVidWdcIik7XG5jb25zdCB0cmFjZSA9IGNyZWF0ZURlYnVnKFwidGYtYXdzLWFkYXB0ZXI6bWFwcGVyOnRyYWNlXCIpO1xuXG5jb25zdCBpc09iamVjdCA9ICh4OiBhbnkpOiB4IGlzIG9iamVjdCA9PlxuICB4ICYmIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHgpO1xuY29uc3QgaXNBcnJheU9mT2JqZWN0cyA9ICh4OiBhbnkpOiB4IGlzIG9iamVjdFtdID0+XG4gIEFycmF5LmlzQXJyYXkoeCkgJiYgeC5sZW5ndGggPiAwICYmIGlzT2JqZWN0KHhbMF0pO1xuXG5jb25zdCBhdXRvTWFwT2JqZWN0UHJvcGVydHlLZXlzID0gKG9iajogb2JqZWN0KTogb2JqZWN0ID0+XG4gIG9iamVjdEZyb21FbnRyaWVzKFxuICAgIE9iamVjdC5lbnRyaWVzKG9iaikubWFwKChbY2ZuS2V5LCBuZXN0ZWRWYWx1ZV0pID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGNyZWF0ZUF1dG9Qcm9wZXJ0eU1hcHBpbmcoY2ZuS2V5KShuZXN0ZWRWYWx1ZSk7XG4gICAgICByZXR1cm4gW3Jlcy50ZkF0dHJpYnV0ZU5hbWUsIHJlcy52YWx1ZV07XG4gICAgfSksXG4gICk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hbWVQcm9wZXJ0eU1hcHBpbmcoXG4gIHRmQXR0cmlidXRlTmFtZTogc3RyaW5nLFxuKTogUHJvcGVydHlNYXBwaW5nRnVuYyB7XG4gIHJldHVybiAodmFsdWUpID0+IHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IGF1dG9NYXBPYmplY3RQcm9wZXJ0eUtleXModmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheU9mT2JqZWN0cyh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUubWFwKGF1dG9NYXBPYmplY3RQcm9wZXJ0eUtleXMpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRmQXR0cmlidXRlTmFtZSwgdmFsdWUgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXV0b1Byb3BlcnR5TWFwcGluZyhcbiAgY2ZuUHJvcGVydHlOYW1lOiBzdHJpbmcsXG4pOiBQcm9wZXJ0eU1hcHBpbmdGdW5jIHtcbiAgLy8gY29udmVydCBuYW1lIHRvIENES1RGIFR5cGVTY3JpcHQgbmFtZVxuICBjb25zdCB0ZkF0dHJpYnV0ZU5hbWUgPSBjYW1lbENhc2UoY2ZuUHJvcGVydHlOYW1lKTtcbiAgLy8gVE9ETzogbWF5YmUgdGhpcyBjYW4gYmVjb21lIHNtYXJ0ZXIgaW4gdGhlIGZ1dHVyZSA6KVxuXG4gIHJldHVybiBjcmVhdGVOYW1lUHJvcGVydHlNYXBwaW5nKHRmQXR0cmlidXRlTmFtZSk7XG59XG5cbnR5cGUgQ2xhc3M8VD4gPSBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBUO1xudHlwZSBQcm9wZXJ0eU1hcHBpbmdGdW5jID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgdGZBdHRyaWJ1dGVOYW1lOiBzdHJpbmc7XG4gIHZhbHVlOiBhbnk7XG59O1xudHlwZSBQcm9wZXJ0eU1hcHBpbmcgPVxuICB8IG51bGwgLy8gaWdub3JlcyB0aGUgcHJvcGVydHksIGRyb3BwaW5nIGl0XG4gIHwgc3RyaW5nIC8vIGp1c3QgbWFwcyBvbnRvIHRoZSBhdHRyaWJ1dGUgbmFtZSBwYXNzZWQgYXMgc3RyaW5nIHdpdGhvdXQgYWRqdXN0aW5nIHRoZSB2YWx1ZVxuICB8IFByb3BlcnR5TWFwcGluZ0Z1bmM7IC8vIGR5bmFtaWNhbGx5IG1hcHMgdG8gb25lIChvciBtb3JlKSBhdHRyaWJ1dGVzLCBjYW4gYWRqdXN0IHRoZSB2YWx1ZVxudHlwZSBQcm9wZXJ0eU1hcHBpbmdzID0geyBbY2ZuUHJvcGVydHk6IHN0cmluZ106IFByb3BlcnR5TWFwcGluZyB9O1xuXG4vLyBUT0RPOiBkZXRlY3QgaWYgc29tZXRoaW5nIGhhcyBiZWVuIG1hcHBlZCB0byBhIHRmQXR0cmlidXRlTmFtZSB0aGF0IGRvZXMgbm90IGV4aXN0IGluIHRoZSBwcm9wcyBvZiBhIHJlc291cmNlXG4vLyAtPiBuZWVkcyB2YWxpZGF0aW9ucyBpbiBnZW5lcmF0ZWQgcHJvdmlkZXIgYmluZGluZ3MhXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHdWVzc2luZ1Jlc291cmNlTWFwcGVyPFQgZXh0ZW5kcyBUZXJyYWZvcm1SZXNvdXJjZT4oXG4gIFJlc291cmNlOiBDbGFzczxUPixcbiAgcHJvcE1hcHBpbmdzOiBQcm9wZXJ0eU1hcHBpbmdzID0ge30sXG4pOiBSZXNvdXJjZU1hcHBlcjxUPiB7XG4gIGNvbnN0IG1hcHBlcjogUmVzb3VyY2VNYXBwZXI8VD4gPSAoXG4gICAgc2NvcGU6IENvbnN0cnVjdCxcbiAgICBpZDogc3RyaW5nLFxuICAgIHByb3BzOiBhbnksXG4gICkgPT4ge1xuICAgIGNvbnN0IG1hcHBlZFByb3BzOiB7IFt0ZkF0dHJpYnV0ZU5hbWU6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgICAvLyBUT0RPOiBleHRyYWN0IHRoaXMgcHJvcCBtYXBwaW5nIGNvZGUgdG8gYmUgYWJsZSB0byByZXVzZSBpdCB3aGVuIHdyaXRpbmcgY3VzdG9tIG1hcHBlcnM/XG4gICAgLy8gbG9vcCBvdmVyIGFsbCBDbG91ZEZvcm1hdGlvbiBwcm9wZXJ0aWVzIGFuZCBjb252ZXJ0IHRoZW0gb25lIGJ5IG9uZVxuICAgIE9iamVjdC5lbnRyaWVzKHByb3BzKS5mb3JFYWNoKChbY2ZuUHJvcGVydHlOYW1lLCBjZm5WYWx1ZV0pID0+IHtcbiAgICAgIC8vIElnbm9yZSB0aGlzIHByb3A/XG4gICAgICBpZiAocHJvcE1hcHBpbmdzW2NmblByb3BlcnR5TmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgLy8gZGVsZXRlIHRvIG1hcmsgdGhpcyBhcyBkb25lXG4gICAgICAgIC8vICh0aGUgYWRhcHRlciB3aWxsIGNhdXRpb3VzbHkgZXJyb3IgZm9yIHZhbHVlcyBsZWZ0IGluIHByb3BzIGFmdGVyIG1hcHBpbmcpXG4gICAgICAgIGRlbGV0ZSBwcm9wc1tjZm5Qcm9wZXJ0eU5hbWVdO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIERldGVybWluZSBob3cgdG8gbWFwIHRoaXMgcHJvcD9cbiAgICAgIGxldCBtYXBwaW5nOiBQcm9wZXJ0eU1hcHBpbmdGdW5jO1xuICAgICAgc3dpdGNoICh0eXBlb2YgcHJvcE1hcHBpbmdzW2NmblByb3BlcnR5TmFtZV0pIHtcbiAgICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICAgICAgbWFwcGluZyA9IHByb3BNYXBwaW5nc1tjZm5Qcm9wZXJ0eU5hbWVdIGFzIFByb3BlcnR5TWFwcGluZ0Z1bmM7XG4gICAgICAgICAgdHJhY2UoYHVzaW5nIGEgY3VzdG9tIG1hcHBpbmcgZnVuY3Rpb24gZm9yICR7Y2ZuUHJvcGVydHlOYW1lfWApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgbWFwcGluZyA9IGNyZWF0ZU5hbWVQcm9wZXJ0eU1hcHBpbmcoXG4gICAgICAgICAgICBwcm9wTWFwcGluZ3NbY2ZuUHJvcGVydHlOYW1lXSBhcyBzdHJpbmcsXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0cmFjZShcbiAgICAgICAgICAgIGB1c2luZyBhIGN1c3RvbSBuYW1lIGZvciAke2NmblByb3BlcnR5TmFtZX0gKCR7cHJvcE1hcHBpbmdzW2NmblByb3BlcnR5TmFtZV19KWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0cmFjZShgYXV0byBtYXBwaW5nICR7Y2ZuUHJvcGVydHlOYW1lfWApO1xuICAgICAgICAgIG1hcHBpbmcgPSBjcmVhdGVBdXRvUHJvcGVydHlNYXBwaW5nKGNmblByb3BlcnR5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIG1hcCB0aGUgdmFsdWVcbiAgICAgIGNvbnN0IHsgdGZBdHRyaWJ1dGVOYW1lLCB2YWx1ZSB9ID0gbWFwcGluZyhjZm5WYWx1ZSk7XG4gICAgICBpZiAoT2JqZWN0LmtleXMobWFwcGVkUHJvcHMpLmluY2x1ZGVzKHRmQXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDb25mbGljdCEgJHtjZm5Qcm9wZXJ0eU5hbWV9IGhhcyBiZWVuIG1hcHBlZCB0byAke3RmQXR0cmlidXRlTmFtZX0gYnV0IHRoZXJlIGhhcyBhbHJlYWR5IGJlZW4gYSB2YWx1ZSBzZXQgZm9yIHRoYXQga2V5LmAsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIG1hcHBlZFByb3BzW3RmQXR0cmlidXRlTmFtZV0gPSB2YWx1ZTtcblxuICAgICAgLy8gZGVsZXRlIHRvIG1hcmsgdGhpcyBhcyBkb25lXG4gICAgICAvLyAodGhlIGFkYXB0ZXIgd2lsbCBjYXV0aW91c2x5IGVycm9yIGZvciB2YWx1ZXMgbGVmdCBpbiBwcm9wcyBhZnRlciBtYXBwaW5nKVxuICAgICAgZGVsZXRlIHByb3BzW2NmblByb3BlcnR5TmFtZV07XG4gICAgfSk7XG5cbiAgICBkZWJ1ZyhcbiAgICAgIGBtYXBwZWQgcHJvcHMgZm9yIFJlc291cmNlICR7UmVzb3VyY2UubmFtZX06ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIG1hcHBlZFByb3BzLFxuICAgICAgICBudWxsLFxuICAgICAgICAyLFxuICAgICAgKX1gLFxuICAgICk7XG5cbiAgICByZXR1cm4gbmV3IFJlc291cmNlKHNjb3BlLCBpZCwgbWFwcGVkUHJvcHMpO1xuICB9O1xuICByZXR1cm4gbWFwcGVyO1xufVxuIl19
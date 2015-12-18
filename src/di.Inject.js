export function referenceAs(...values) {
   return function decorator(target, key, descriptor) {
   	console.log(target, key, descriptor);
      if (descriptor) {
      	let functionDescriptor = descriptor.value;
      	functionDescriptor.inject = values;
      } else {
      	target.inject = values;
      }
       	console.log(target.inject );
   }
}
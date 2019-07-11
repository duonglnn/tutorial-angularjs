# Angularjs-tutorial
Tutorial về framework AngularJS <br /><br />
## Tổng quan về AngularJS
### Giới thiệu
AngularJS là một bộ Javascript Framework rất mạnh và thường được sử dụng để xây dựng project Single Page Application (SPA). Nó mở rộng HTML DOM với các thuộc tính bổ sung cho nên đáp ứng được nhiều yêu cầu từ phía người dùng. AngularJS là một Framework mã nguồn mở hoàn toàn miễn phí và được hàng ngàn các lập trình viên trên thế giới ưa chuộng và sử dụng. Angular JS hỗ trợ mô hình MVC.

Dưới đây là một số tính năng cốt lõi quan trọng của AngularJS:
- Data-binding (Ràng buộc dữ liệu): tự động đồng bộ dữ liệu giữa model và view
- Scope: những đối tượng kết nối Controller và View
- Controller: lớp business logic phía sau views
- Service: mục đích của xây dựng service là để tái sử dụng các phương thức chung ở nhiều view hoặc controller khác nhau
- Filters (Bộ lọc): format lại dữ liệu hiển thị ra ngoài view người dùn
- Directives: cho phép mở rộng HTML và bạn có thể custom lại các thuộc tính (attribute), phần tử (elements)
- Templates: hiển thị thông tin từ controller, đây là một thành phần của views
- Routing: chuyển đổi giữa các action trong controller
- MVW: Model-View-Whatever, từ MVW có thể phát triển thành MVC Model-View-Controller hoặc là MVVM Model-View-ViewModel
- Deep Linking (Liên kết sâu): cho phép bạn mã hóa trạng thái của ứng dụng trong các URL để nó có thể đánh dấu được với công cụ tìm kiếm.
- Dependency Injection: liên kết, thống nhất các đối tượng và chức năng.

Mối liên hệ giữa các thành phần trong AngularJS <br />
<img src="https://s3.amazonaws.com/classconnection/362/flashcards/6692362/png/screen_shot_2014-12-23_at_70514_pm-14A7A42335A47DBBC08.png" width="400">

### Cài đặt
Để sử dụng AngularJS trong project, cần phải khai báo 1 cặp thẻ `<script></script>` chứa đường link tới file <kbd>angular.min.js</kbd>. Trong tutorial này, sử dụng AngularJS phiên bản 1.7.8. [trang chủ](https://angularjs.org/) rồi giải nén, hoặc sử dụng CDN như sau `https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.min.js`.




## Expression - Controller - Scope
### Expression
AngularJS đồng bộ dữ liệu giữa ứng dụng với HTML bằng cách sử dụng _expression_. Hiểu 1 cách đơn giản, expression là dữ liệu muốn hiển thị ra màn hình. Dữ liệu ở đây có thể là số, chuỗi, phần tử của mảng hoặc thuộc tính của đối tượng... 
Expression được viết bên trong cặp dấu {{ }} 

[Demo expression](https://github.com/duonglnn/tutorial-angularjs/blob/master/expression/expression.html)

**Giải thích:** thuộc tính <kbd>ng-app</kbd> ở thẻ body là thuộc tính của AngularJS. Nó đánh dấu vị trí mà code AngularJS bắt đầu có hiệu lực. Thuộc tính <kbd>ng-init</kbd> có nhiệm vụ khởi tạo giá trị cho các biến. ng-app và ng-init được gọi là _directive (điều hướng)_

### Controller
Trong AngularJS, controller có nhiệm vụ chính là điều khiển dữ liệu của ứng dụng. Một controller được định nghĩa bằng cách sử dụng directive <kbd>ng-controller</kbd>. Một controller là một đối tượng Javascript bao gồm các thuộc tính và các phương thức.

### Scope
Scope có nhiệm vụ đồng bộ dữ liệu giữa HTML (View) và Javascript (Controller). Một scope là 1 đối tượng Javascript đặc biệt bao gồm các thuộc tính và các phương thức. Các thuộc tính và phương thức này có thể được sử dụng ở cả View và Controller.<br />
Trong mô hình MVC của AngularJS thì:
- View chính là những đoạn mã HTML hiển thị phía người dùng
- Model là dữ liệu phục vụ cho view hiện tại
- Controller là những hàm Javascript có nhiệm vụ thêm, sửa, xóa, điều khiển dữ liệu

Và scope chính là Model. 

**$rootScope**
Nếu như $scope chỉ ảnh hưởng trong phạm vi của controller (tính từ phần tử HTML khai báo ng-controller), thì $rootScope ảnh hưởng lên toàn bộ ứng dụng (tính từ phần tử HTML khai báo ng-app).

[Demo rootScope](https://github.com/duonglnn/tutorial-angularjs/blob/master/controller/function.html)

Trong ví dụ trên, có thể thấy nếu như $rootScope và $scope có một thuộc tính cùng tên, thì ở trong div khai báo ng-controller, thuộc tính của $scope sẽ ghi đè thuộc tính của $rootScope, nhưng ở bên ngoài div đó, thuộc tính của $rootScope sẽ không bị ghi đè.




## Directive
### Khái niệm
AngularJS cho phép  mở rộng các phần tử HTML bằng cách thêm các thuộc tính mới gọi là _directive_. Bên cạnh những directive mà AngularJS đã cung cấp sẵn thì cũng có thể tự định nghĩa các directive của riêng mình. 

Các thuộc tính là directive thường có tiền tố **ng-** ở phía trước, ví dụ như: ng-app, ng-controller, ng-model, ... Danh sách các directive của AngularJS  có thể xem ở [đây](https://docs.angularjs.org/api/ng/directive)

Dựa theo chức năng, các directive có thể phân chia thành các nhóm như sau:

<img src="http://image.slidesharecdn.com/dc9765ab-3c86-4477-87d5-39c277594241-150303075043-conversion-gate01/95/bdotnet-angularjs-directives-uday-7-638.jpg?cb=1425390686" width="400" />

### Data binding
**1. ng-model**

Directive ng-model có những nhiệm vụ sau:
- Đồng bộ giá trị của các HTML control (input, select, button, textarea) với dữ liệu của ứng dụng
- Cung cấp các validation như required, number, email, url,...
- Kiểm soát trạng thái của các HTML control (valid/invalid, dirty/pristine, touched/untouched, validation errors)
- Thêm vào hoặc xóa đi các class CSS ở các HTML control dựa theo trạng thái của model. Danh sách các class:
	- ng-valid: the model is valid
    - ng-invalid: the model is invalid
    - ng-valid-[key]: for each valid key added by $setValidity
    - ng-invalid-[key]: for each invalid key added by $setValidity
    - ng-pristine: the control hasn't been interacted with yet
    - ng-dirty: the control has been interacted with
    - ng-touched: the control has been blurred
    - ng-untouched: the control hasn't been blurred
    - ng-pending: any $asyncValidators are unfulfilled
    - ng-empty: the view does not contain a value or the value is deemed "empty", as defined by the ngModel.NgModelController method
    - ng-not-empty: the view contains a non-empty value


[Đọc thêm về Data Binding](https://docs.angularjs.org/guide/databinding)

_Ví dụ: Cho 1 thẻ input, kiểm tra xem giá trị nhập vào có phải là chữ số hay không_

[Input validation](https://github.com/duonglnn/tutorial-angularjs/blob/master/form/validation.html)

**Giải thích:** Thử nhập 1 chữ cái vào ô input, bật firebug lên sẽ thấy thẻ \<input> có thêm 1 class <kbd>ng-invalid</kbd> 

**2. ng-model-options**
ng-model-options dùng để cấu hình một số thông số liên quan tới ng-model. Khi ứng dụng được chạy lên thì ng-model-options sẽ thực thi trước và sau đó ng-model mới được tạo. Các thông số bao gồm:
- updateOn: xác định thao tác nào (blur, default, keypress, ...) sẽ quyết định việc update $scope
- debounce: xác định khoảng thời gian sau bao lâu (tính bằng millisecond) thì update $scope
- standAlone
...

_Ví dụ 1: Cho 1 thẻ input, sau khi nhập giá trị, phải click chuột ra ngoài input thì expression mới thay đổi_

[updateOn](https://github.com/duonglnn/tutorial-angularjs/blob/master/directive/updateOn.html)

_Ví dụ 2: Cho 1 thẻ input, sau khi nhập giá trị, phải đợi 1s thì expression mới thay đổi_

[debounce](https://github.com/duonglnn/tutorial-angularjs/blob/master/directive/debounce.html)

**3. ng-bind**

ng-bind cũng có tác dụng giống như expression. So sánh expression và ng-bind:

**Expression:** Thỉnh thoảng khi load ứng dụng trên trình duyệt, có thể thấy đoạn mã expression sẽ nhấp nháy khoảng vài millisecond trước khi dữ liệu trong expression được load. Bởi vì template được load trước khi AngularJS biên dịch các phần tử. Để giải quyết vấn đề này có thể sử dụng directive [ng-cloak](https://docs.angularjs.org/api/ng/directive/ngCloak)

**ng-bind:** được sử dụng bên trong các phần tử HTML DOM. ng-bind sẽ được thực thi ngay khi dữ liệu thay đổi.

Trong [ví dụ 1](https://github.com/duonglnn/tutorial-angularjs/blob/master/directive/two-way.html) ở phần ng-model, thay vì sử dụng expression sẽ sử dụng ng-bind: [ng-bind](https://github.com/duonglnn/tutorial-angularjs/blob/master/directive/ng-bind.html)


### DOM Manipulation
Trong AngularJS, có 3 directive để liên kết dữ liệu của ứng dụng với thuộc tính của các phần tử HTML DOM là: **ng-disabled**, **ng-show** và **ng-hide**. Nếu biểu thức bên trong 3 thuộc tính này mà **true** thì các phần tử HTML DOM sẽ thay đổi như sau:
- Với phần tử có chứa thuộc tính ng-disabled: sẽ được thêm thuộc tính <kbd>disabled="disabled"</kbd>
- Với phần tử có chứa thuộc tính ng-show: sẽ xóa đi class <kbd>.ng-hide</kbd>
- Với phần tử có chứa thuộc tính ng-hide: sẽ thêm vào class <kbd>.ng-hide</kbd>

_Ví dụ:_ Cho 3 checkbox và 3 button. Khi click checkbox 1, button 1 sẽ bị disabled. Click checkbox 2, button 2 sẽ hiện ra. Click checkbox 3, button 3 sẽ bị ẩn đi.

[DOM manipulation](https://github.com/duonglnn/tutorial-angularjs/blob/master/directive/dom-manipulation.html)

**Giải thích:** Với checkbox 1 và button 1, checkbox 1 nếu chưa được tích vào thì biểu thức disableButton sẽ mang giá trị false, còn khi tích vào nó sẽ sẽ trả về giá trị true. Khi disbaleButton mang giá trị true, button 1 sẽ được thêm thuộc tính disabled="disabled". Tương tự với 2 checkbox và button còn lại.


### Events
AngularJS  cung cấp một số event directive cho phép chạy hàm của AngularJS khi xảy ra sự kiện người dùng. Một sự kiện của AngularJS sẽ không ghi đè sự kiện tương ứng của HTML, cả 2 sự kiện sẽ được thực thi cùng nhau. 

Danh sách các event directive trong angular:
- ng-blur
- ng-change
- ng-click
- ng-copy
- ng-cut
- ng-dblclick
- ng-focus
- ng-keydown
- ng-keypress
- ng-keyup
- ng-mousedown
- ng-mouseenter
- ng-mouseleave
- ng-mousemove
- ng-mouseover
- ng-mouseup
- ng-paste

_Ví dụ 1:_ Mỗi lần click vào 1 button thì hiển thị ra số lần đã click

[count](https://github.com/duonglnn/tutorial-angularjs/blob/master/directive/count.html)

_Ví dụ 2:_ Hiển thị ra 1 menu dọc khi click vào 1 button, và ẩn menu đó đi khi click lần nữa.

[toggle](https://github.com/duonglnn/tutorial-angularjs/blob/master/directive/toggle.html)


## Form

### Form submit
Để submit 1 form trong AngularJS, có thể sử dụng 2 cách sau:
- Sử dụng directive **ng-submit** trong thẻ form
- Sử dụng directive **ng-click** ở thẻ input hoặc button có <kbd>type="submit"</kbd> đầu tiên

Một vài lưu ý khi submit form:
- Nếu form chỉ có một thẻ input duy nhất thì form sẽ submit khi nhấn Enter vào thẻ input đó
- Nếu form có hai thẻ input trở lên và không có button submit hoặc (input[type="submit"]) thì khi nhấn Enter thì form sẽ không submit
- Nếu form có một hoặc nhiều field và có một hoặc nhiều button submit hoặc (input[type="submit"]) thì khi nhấn Enter vào một field bất kỳ, AngularJS sẽ kích hoạt sự kiện Click trên button hoặc input đầu tiên (ng-click) cũng như sự kiện submit của form (ng-submit)

### Form and Input state
Để có thể kiểm tra dữ liệu đầu vào (validate data), AngularJs đã cung cấp các **state** cho Input và Form
Input có các thuộc tính state sau:
- $untouched: trả về true nếu field chưa có tác động
- $touched: trả về true nếu field đã bị tác động    
- $pristine: trả về true nếu field chưa bị thay đổi
- $dirty: trả về true nếu field đã bị thay đổi
- $invalid: trả về true nếu field hợp lệ
- $valid: trả về true nếu field hợp lệ
- $error: đối tượng này bao gồm tất cả các thuộc tính validation (required, pattern, maxlength, minlength, ...)

Thuộc tính state của input có dạng: <kbd>formName.inputFieldName.propertyName</kbd>

Form có các thuộc tính state sau:
- $pristine: trả về true nếu không có field nào bị thay đổi
- $dirty: trả về true nếu có một hoặc nhiều field bị thay đổi
- $invalid: trả về true nếu nội dung của form không hợp lệ
- $valid: trả về true nếu nội dung của form hợp lệ
- $submitted: trả về true nếu form đã được submit

Thuộc tính state của form có dạng: <kbd>formName.propertyName</kbd>

Dựa trên các state, AngularJS sẽ thêm vào form và input các class CSS tương ứng

### Ví dụ

_Ví dụ 1:_ Xây dựng chương trình nhập danh sách heroes và lưu vào trong một mảng rồi in ra ngoài trình duyệt

[Student List](https://github.com/duonglnn/tutorial-angularjs/blob/master/form/list.html)

**Giải thích:** Trong ví dụ này, bắt sự kiện submit form bằng cách sử dụng directive ng-submit ở thẻ form

_Ví dụ 2:_  Tạo 2 input và cho người dùng nhâp vào 2 số, validate bắt buộc nhập vào phải là số, đồng thời xuất ra màn hình kết quả cộng trừ nhân chia của hai số đó.

[Calculator](https://github.com/duonglnn/tutorial-angularjs/blob/master/form/calculator.html)

_Ví dụ 3:_ Xây dựng 1 form đăng ký với các yêu cầu sau:
- Input Username bắt buộc nhập, và có min length phải là 3 ký tự và max length là 8 ký tự, chỉ được chứa chữ và số
- Input Email bắt buộc nhập, và phải nhập đúng định dạng email
- Input Password bắt buộc nhập, và có min length phải là 5 ký tự và max length là 8 ký tự 
- Nếu các điều kiện validate không thỏa, thì sẽ khóa chức năng submit của Form, đồng thời xuất thông báo lỗi bên cạnh input bị lỗi
- Nếu thỏa các điều kiện validate, sẽ hiện ra thông báo đăng ký thành công

[Register Form Validation](https://github.com/duonglnn/tutorial-angularjs/blob/master/form/validation.html)

**Giải thích:** Ở trong thẻ form, thêm thuộc tính novalidate để ngăn HTML5 validation 

## Filter
Filter (bộ lọc) cho phép định dạng dữ liệu để hiển thị trên giao diện người dùng mà không thay đổi định dạng ban đầu.
Cú pháp của Filter: `{{expression | filterName1:parameter1 | filterName2:parameter2 | ... }}`
Danh sách các Filter:
- currency: chuyển một số thành định dạng tiền tệ.
- date: chuyển dữ liệu kiểu date thành string theo một định dạng nào đó.
- filter: chọn ra một tập con các phần tử của mảng.
- json: định dạng 1 Javascript object thành 1 JSON string.
- limitTo: trả về 1 mảng mới từ mảng ban đầu
- lowercase: chuyển 1 chuỗi về chữ thường.
- number: định dạng 1 số giống hàm number_format trong PHP
- orderBy: sắp xếp mảng theo biểu thức.
- uppercase: chuyển 1 chuỗi thành chữ in hoa.

_Ví dụ:_ Xây dựng 1 trang tìm kiếm truyện tranh gồm các yêu cầu sau:
- Tạo 1 danh sách truyện tranh, mỗi truyện chứa các thông tin: ID, tên truyện, số chapter.
- Sắp xếp và hiển thị danh sách truyện theo tên truyện. Sắp xếp theo alphabet.
- Tạo 4 input để tìm kiếm truyện theo All (tất cả các thông tin), theo ID, theo tên truyện, theo số chapter. Nếu không có truyện thỏa mãn thì thông báo không tìm thấy kết quả.

[Search Comic App](https://github.com/duonglnn/tutorial-angularjs/blob/master/filter/comic.html)

## Service
Trong AngularJS, service là một hàm hoặc một đối tượng thực hiện một nhiệm vụ cụ thể nào đó. AngularJS đã xây dựng sẵn 27 service, ví dụ như: $location, $http, $window, $timeout, $interval, ...

### Định nghĩa service mới
Để tạo một service mới, có thể làm theo 2 cách:
- Sử dụng phương thức service
- Sử dụng phương thức factory

**1. Sử dụng phương thức service**

Cách định nghĩa:
````
app.service('MyService', function () {
  this.sayHello = function () {
    console.log('hello');
  };
});
````
Sau khi định nghĩa, có thể sử dụng ở tất cả controller, directive và filter:
````
app.controller('MyController', function (MyService) {
  MyService.sayHello(); // logs 'hello'
});
````

**2. Sử dụng phương thức factory**

Cách định nghĩa:
````
app.factory('MyFactory', function () {
  return {
  	sayHello: function () {
    	console.log('hello');
  	}
  };
});
````
Sau khi định nghĩa, có thể sử dụng ở tất cả controller, directive và filter:
````
a.controller('MyController', function (MyFactory) {
  MyFactory.sayHello(); // logs 'hello'
});
````

_Ví dụ 1:_ Ví dụ này giúp phân biệt cách sử dụng 2 phương thức trên

[Service & Factory](https://github.com/duonglnn/tutorial-angularjs/blob/master/service/service%26factory.html)

_Ví dụ 2:_ Tạo 1 factory có nhiệm vụ tính bình phương của 1 số. 1 service thông báo kết quả bình phương của 1 số. 

[Bình phương](https://github.com/duonglnn/tutorial-angularjs/blob/master/service/square.html)

### $http
Service $http có nhiệm vụ gửi, trao đổi thông tin với server thông qua ajax. $http sẽ gửi lên server 1 request và trả về 1 response. 

$http có 7 shortcut method:
- .delete()
- .get()
- .head()
- .jsonp()
- .patch()
- .post()
- .put()

**1. $http.get**

Method này sẽ gửi lên server 1 http GET request
````
$http.get(url) // url: đường dẫn tới file server
````
$http.get(url) sẽ trả về 1 HttpPromise object chứa các phương thức xử lý response của GET request:
````
$http.get(url).then(function(response) {
	// response là 1 object gồm các thuộc tính:
    // .config
    // .data: dữ liệu này đọc từ server. Server bắt buộc phải trả về client dữ liệu kiểu JSON
    // .headers
    // .status: kiểu number
    // .statusText: kiểu string
});
````

[$http.get demo](https://github.com/duonglnn/tutorial-angularjs/tree/master/service/http.get)

**2. $http.post**

Cú pháp: 
````
$http.get(url, data, config).then(function(response) {
	// data: dữ liệu gửi lên server, kiểu Object. Server sẽ nhận được dữ liệu kiểu JSON
    // response: tương tự như trong $http.get, điểm khác là response.data không nhất thiết phải là kiểu JSON
});
````

[$http.post demo](https://github.com/duonglnn/tutorial-angularjs/tree/master/service/http.post)


## Route

### Overview
AngularJS giúp xây dựng 1 Single Page Application (SPA): ứng dụng sẽ được chia làm nhiều View mang nội dung khác nhau, khi chuyển View  không cần phải load lại page. Mỗi View như thế sẽ được quản lý bởi 1 **route**. Mỗi một route được liên kết với 1 View và 1 Controller riêng. Khi ứng dụng được load, nó sẽ xác định route (phần đằng sau dấu # ở trên URL) để quyết định template HTML nào sẽ được show ra. 
````
http://demo.com/index.html#View1
http://demo.com/index.html#View2
http://demo.com/index.html#View3
http://demo.com/index.html#View4
````
Để sử dụng route, cần phải nạp thư viện <kbd>angular-route.min.js</kbd> và cấu hình thông qua <kbd>$routeProvider</kbd> (provider của service $route):
````
var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
  	.when('/view1',
  	{
      templateUrl: 'templates/view1.html'	
      controller: 'FirstController',
  	})
  	.when('/view2',
  	{
      templateUrl: 'templates/view2.html'	
      controller: 'SecondController',
  	})
   	...
  	.otherwise({redirectTo: '/view1'});
  });
````
Giả sử khi gõ trên trình duyệt địa chỉ http://localhost:63342/tutorial-angularjs/route/overview/index.html?_ijt=9ufnsr8uqib9fm8888100nmpro#/about, AngularJS sẽ load about.html đồng thời triệu gọi $AboutCtrl. Khối <kbd>otherwise</kbd> dùng để định nghĩa route.

Để hiển thị View, sử dụng directive <kbd>ng-view</kbd>: `<div ng-view></div>` hoặc `<ng-view></ng-view>`.

_Ví dụ:_ Xây dựng 1 ứng dụng web gồm 3 page: home, about và contact


### Truyền tham số 
Để định nghĩa 1 route có truyền tham số trên URL, thì chỉ cần thêm `/:tên_tham_số` ở templateUrl:
````
.when('/about/:id', {
  templateUrl: 'templates/about.html',
  controller: 'AboutCtrl'
})
````
URL trên browser lúc này sẽ có dạng <kbd>http://localhost:63342/tutorial-angularjs/route/params/index.html?_ijt=ss5v93hceb6ic91irsbq6iurq3#/showDetail/4</kbd>.

Để lấy được tham số trong controller, sử dụng **`$routeParams.tên_tham_số`**

_Ví dụ:_ Phát triển tiếp [$http.get demo](https://github.com/duonglnn/tutorial-angularjs/blob/master/service/http.get/index.html): thêm 1 cột chứa đường link xem chi tiết truyện tranh, click vào link này sẽ hiển thị thông tin chi tiết của truyện đó (ID, name, chapter)

[Show comic detail](https://github.com/duonglnn/tutorial-angularjs/tree/master/route/paramss)

**Giải thích:** Trong DetailCtrl, sau khi lấy được tham số id, sẽ lấy object trong mảng comics mà có id như thế bằng cách sử dụng hàm <kbd>filter</kbd> của Javascript.

## Difference between Factory and Service

[Link tham khảo](https://blog.thoughtram.io/angular/2015/07/07/service-vs-factory-once-and-for-all.html#the-difference-between-services-and-factories)

---
title: '30 câu hỏi phỏng vấn Frontend giúp Developer "cân" hết mọi level'
description: 'Việc chuẩn bị kỹ lưỡng cho buổi phỏng vấn vị trí Frontend Developer là chìa khóa để bạn "rinh" về offer thành công. Bài viết này sẽ cung cấp cho bạn 30 câu hỏi phỏng vấn kỹ thuật về phát triển web Frontend, tập trung vào JavaScript, HTML và CSS....'
image: '/images/post-5.png'
date: '08/10/2024'
author: '@BizCDN0707'
---

<strong>Chuẩn bị cho buổi phỏng vấn Frontend cần những gì?</strong>

Chuẩn bị cho buổi phỏng vấn Frontend là một quá trình cần sự đầu tư kỹ lưỡng. Dưới đây là một số điều quan trọng bạn cần lưu ý:

Nắm vững kiến thức cơ bản: Trước khi giải quyết các vấn đề phức tạp, bạn cần đảm bảo mình hiểu rõ những kiến thức cơ bản về phát triển Frontend. Điều này bao gồm HTML, CSS và JavaScript, cũng như cách chúng hoạt động cùng nhau để tạo ra các trang web có khả năng phản hồi và tương tác.
Luyện tập viết code: Bạn có thể cải thiện kỹ năng viết code của mình thông qua các dự án nhỏ hoặc bằng cách giải quyết các vấn đề trên các nền tảng như LeetCode và HackerRank. Hãy tập trung vào những thử thách liên quan đến phát triển Frontend.
Tìm hiểu về Frameworks và Libraries: Hãy làm quen với các frameworks và libraries phổ biến như React, Angular hoặc Vue.js. Việc hiểu rõ các công cụ này thường rất quan trọng đối với các vị trí Frontend hiện đại.
Nắm vững các công cụ cơ bản trong quy trình phát triển: Đảm bảo bạn thành thạo các công cụ và thực hành thiết yếu như kiểm soát phiên bản (ví dụ: Git), kiểm thử (kiểm thử đơn vị và tích hợp) và các công cụ build (ví dụ: Vite). Đây là những yếu tố quan trọng đối với bất kỳ vai trò Frontend nào.
Hiểu các nguyên tắc UI/UX: Hiểu các khái niệm cơ bản về thiết kế và trải nghiệm người dùng có thể giúp bạn trở thành một Frontend Developer nổi bật. Hãy cố gắng tìm hiểu về khả năng tiếp cận, thiết kế web responsive và cách tạo ra các giao diện trực quan.
Nghiên cứu về công ty: Hãy thể hiện sự quan tâm của bạn đến công ty mà bạn đang ứng tuyển bằng cách tìm hiểu về hoạt động kinh doanh và sản phẩm của họ. Chuẩn bị một số câu hỏi để hỏi trong buổi phỏng vấn để cho thấy bạn thực sự quan tâm đến vị trí này.
Cải thiện kỹ năng giao tiếp của bạn: Mặc dù điều này không đặc thù cho Frontend, nhưng việc đầu tư vào tương lai của bạn luôn là một ý tưởng hay.

<strong>Danh sách các câu hỏi thuộc Level cơ bản</strong>

<strong>1. Sự khác biệt giữa id và class trong HTML/CSS là gì?</strong>

id là một định danh duy nhất cho một phần tử HTML duy nhất. Class là một định danh có thể tái sử dụng và có thể được áp dụng cho nhiều phần tử.

Bạn nên sử dụng id khi bạn cần truy cập một phần tử duy nhất thông qua CSS hoặc JavaScript. Và bạn sẽ muốn sử dụng class khi bạn cần truy cập một nhóm các phần tử DOM.

Trong CSS:

#id chọn một phần tử cụ thể có id đó.
.class chọn tất cả các phần tử có lớp đó.

<strong>2. Bạn có thể giải thích về box model trong CSS không?</strong>

Mô hình hộp CSS mô tả các hộp hình chữ nhật được tạo cho các phần tử trong DOM. Mô hình hộp bao gồm các lớp sau:

Content: Phần trong cùng, nơi văn bản và hình ảnh xuất hiện.
Padding: Khoảng trống giữa nội dung và đường viền.
Border: Đường viền ngoài của phần đệm, bao quanh phần tử.
Margin: Khoảng trống bên ngoài đường viền, ngăn cách phần tử với các phần tử khác.
Bằng cách kiểm soát từng lớp riêng lẻ, bạn có thể xác định giao diện của mỗi phần tử trong giao diện người dùng.

<strong>3. Sự khác biệt giữa các phần tử inline, inline-block và block là gì?</strong>

Trong CSS, sự khác biệt giữa các phần tử inline, inline-block và block nằm ở cách chúng được hiển thị trên trang web:

Inline: Các phần tử inline không có chiều rộng hoặc chiều cao. Thay vào đó, chúng không bắt đầu trên một dòng mới và chỉ chiếm chiều rộng cần thiết (dựa trên nội dung của chúng). Ví dụ: , .
Inline-block: Cũng giống như các phần tử inline, các phần tử DOM ở đây không bắt đầu trên một dòng mới, tuy nhiên, chúng cho phép bạn đặt chiều cao và chiều rộng trên chúng. Ví dụ:.
Block: Các phần tử bắt đầu trên một dòng mới, chiếm toàn bộ chiều rộng khả dụng theo mặc định. Bạn có thể đặt chiều rộng và chiều cao của chúng.

<strong>4. Một số phương pháp hay nhất về SEO khi cấu trúc tài liệu HTML là gì?</strong>

Chỉ từ phía HTML:

Sử dụng HTML ngữ nghĩa : Sử dụng các thẻ như <header>, <nav>, <main>, <article>, <section> và <footer> để cung cấp cấu trúc có ý nghĩa.
Tiêu đề phân cấp phù hợp : Sử dụng tiêu đề (<h1> đến <h6>) một cách chính xác, đảm bảo <h1> được sử dụng một lần trên mỗi trang cho tiêu đề chính, theo sau là <h2>, <h3>, v.v.
Thẻ Meta : Bao gồm các thẻ <meta> có liên quan, chẳng hạn như mô tả, từ khóa và chế độ xem, để cung cấp siêu dữ liệu về trang web.
Thuộc tính Alt trên hình ảnh : Sử dụng thuộc tính alt cho hình ảnh để mô tả nội dung, cải thiện khả năng truy cập và khả năng hiểu của công cụ tìm kiếm.
Ngoài ra:

Liên kết nội bộ: Đảm bảo sử dụng liên kết nội bộ để kết nối nội dung trong trang web của bạn, giúp công cụ tìm kiếm thu thập dữ liệu và hiểu cấu trúc trang web.
Thiết kế thân thiện với thiết bị di động: Lập trình trang web và CSS của bạn với tư duy ưu tiên thiết bị di động. Đảm bảo trang web có khả năng phản hồi và thân thiện với thiết bị di động để cải thiện trải nghiệm người dùng và thứ hạng trên công cụ tìm kiếm.
Thời gian tải nhanh: Cố gắng tối ưu hóa hình ảnh, sử dụng mã hiệu quả và tận dụng bộ nhớ đệm để cải thiện tốc độ tải trang. Trang web tải càng nhanh thì lợi thế so với các kết quả tương tự khác trên SERP càng lớn.

<strong>5. DOM (Document Object Model) là gì?</strong>

DOM (Document Object Model) là một API cho các tài liệu web. Nó thể hiện cấu trúc của một trang web HTML dưới dạng cây nút, trong đó mỗi nút tương ứng với một phần của tài liệu (ví dụ: một phần tử, một thuộc tính hoặc văn bản).

<strong>6. Làm cách nào để bạn thêm trình nghe sự kiện vào một phần tử?</strong>
Để thêm trình nghe sự kiện vào một phần tử, trước tiên bạn phải “lấy” phần tử đó thông qua một trong nhiều phương thức của đối tượng tài liệu (ví dụ: getElementById, v.v.) và sau đó sử dụng phương thức addEventListener của đối tượng đã lấy.

Phương thức sẽ nhận tên sự kiện (ví dụ: ‘click’, ‘keyup’, ‘mouseup’, v.v.), hàm xử lý sự kiện và, tùy chọn, một giá trị boolean cho biết sự kiện có nên được ghi lại trong giai đoạn ghi lại hay không.

<strong>7. Sự khác biệt giữa null và undefined là gì?</strong>
Trong JavaScript, “undefined” là giá trị mặc định mà các biến mới nhận, và nó có nghĩa là biến đã được định nghĩa nhưng nó chưa được gán bất kỳ giá trị nào.

Và “null” thực sự là một giá trị báo hiệu “không có giá trị” hoặc “không có đối tượng”, nó được gán đặc biệt cho biến bởi nhà phát triển.

<strong>8. Sự khác biệt giữa cookie, sessionStorage và localStorage là gì?</strong>
Cookie là những phần dữ liệu nhỏ được lưu trữ trong trình duyệt web. Chúng chủ yếu được sử dụng để lưu giữ thông tin giữa các yêu cầu HTTP, chẳng hạn như xác thực người dùng, quản lý phiên và theo dõi hành vi của người dùng.

Mặt khác, sessionStorage được thiết kế để lưu trữ tạm thời và chỉ có thể truy cập được trong cùng một phiên (ví dụ: trong khi cửa sổ hoặc tab trình duyệt đang mở). Dữ liệu được lưu trữ trong sessionStorage sẽ bị mất khi cửa sổ trình duyệt bị đóng.

Cuối cùng, localStorage tương tự như sessionStorage nhưng vẫn tồn tại ngay cả khi cửa sổ hoặc tab trình duyệt bị đóng và mở lại. Nó cung cấp bộ nhớ dài hạn cho các ứng dụng web. Chúng rất giống với cookie, tuy nhiên, giới hạn kích thước trên localStorage khá lớn so với cookie, khiến nó trở thành một giải pháp thay thế tốt hơn nhiều khi lưu trữ các tập dữ liệu lớn.

<strong>9. Trình duyệt hiển thị trang web như thế nào?</strong>
Quá trình hiển thị một trang web trong trình duyệt liên quan đến một số bước:

Phân tích cú pháp HTML.
Phân tích cú pháp CSS và áp dụng kiểu.
Tính toán vị trí của mỗi phần tử trong bố cục của trang.
Vẽ các pixel thực tế trên màn hình, đồng thời sắp xếp chúng thành các lớp.
Ghép tất cả các lớp lại với nhau để hiển thị trang web trên màn hình. Bước này đang tính đến các giá trị z-index, giá trị độ mờ, v.v.
Chạy mã JavaScript.
Tải các tài nguyên không đồng bộ.
<strong>10. Truy vấn phương tiện là gì?</strong>
Truy vấn phương tiện là một tính năng trong CSS cho phép các nhà phát triển Frontend áp dụng các kiểu khác nhau cho một tài liệu dựa trên các đặc điểm khác nhau của thiết bị hoặc chế độ xem. Ví dụ: bạn có thể đặt các kiểu khác nhau dựa trên chiều rộng, chiều cao, hướng hoặc loại thiết bị.

Thông qua các truy vấn phương tiện, chúng tôi có thể đạt được thiết kế phản hồi cho phép kiểu dáng thích ứng với các kích thước màn hình và khả năng thiết bị khác nhau.

Danh sách các câu hỏi thuộc Level trung cấp
<strong>11. Sự khác biệt giữa đơn vị em và rem là gì?</strong>
Chúng đều là đơn vị đo lường tương đối, tuy nhiên, chúng tương đối với những thứ khác nhau:

Đơn vị “em” là tương đối so với kích thước phông chữ của phần tử cha của chúng. Vì vậy, nếu phần tử cha có kích thước phông chữ là 20px, thì việc đặt kích thước phông chữ “2em” sẽ bằng 40px.
Đơn vị “rem” là “root em”, có nghĩa là chúng tương đối so với phần tử gốc của trang web (phần tử “”).
<strong>12. Làm cách nào để bạn tạo bố cục flexbox?</strong>
Để tạo bố cục flexbox, bạn phải thực hiện 2 bước chính:

Thiết lập phần tử chứa bằng cách áp dụng thuộc tính CSS “display:flexbox” cho nó.
Thiết lập các thuộc tính flexbox cho mỗi phần tử bên trong vùng chứa (một cái gì đó như “flex:1” là đủ).
<strong>13. Bạn có thể giải thích về độ đặc hiệu của CSS và cách thức hoạt động của nó không?</strong>
Độ đặc hiệu của CSS được sử dụng để xác định bộ kiểu nào sẽ áp dụng trên bất kỳ phần tử nào khi có các kiểu chồng chéo (chẳng hạn như một số quy tắc đặt kích thước phông chữ của cùng một phần tử).

Cách thức hoạt động của nó là bằng cách áp dụng thứ tự ưu tiên sau:

Đầu tiên, bất kỳ kiểu nội tuyến nào sẽ ghi đè bất kỳ kiểu nào khác.
Thứ hai, bất kỳ kiểu dựa trên ID nào sẽ ghi đè mọi thứ ngoại trừ kiểu nội tuyến.
Thứ ba, các bộ chọn dựa trên lớp sẽ ghi đè mọi thứ ngoại trừ kiểu nội tuyến và dựa trên ID.
Cuối cùng, các bộ chọn kiểu có thể bị ghi đè bởi bất kỳ loại bộ chọn nào khác.
<strong>14. Làm cách nào bạn có thể tạo bố cục lưới CSS?</strong>
Để tạo bố cục lưới, trước tiên bạn phải chỉ định thuộc tính “display:grid” trên phần tử chứa, sau đó xác định cấu trúc của lưới bằng cách sử dụng các thuộc tính “grid-template-rows” và “grid-template-columns”.

Bây giờ chỉ cần đặt các phần tử bên trong vùng chứa lưới và chỉ định các thuộc tính “grid-column” hoặc “grid-row”.

<strong>15. Bao đóng là gì và bạn sẽ sử dụng chúng như thế nào/tại sao?</strong>
Khi một hàm được định nghĩa trong một hàm khác, nó vẫn giữ quyền truy cập vào các biến và tham số của hàm bên ngoài, ngay cả sau khi hàm bên ngoài đã thực thi xong. Liên kết đó, giữa hàm bên trong và phạm vi của nó bên trong hàm bên ngoài được gọi là “bao đóng”.

Bạn có thể sử dụng chúng để tạo các biến riêng tư mà chỉ hàm bên trong mới có thể truy cập, bạn thậm chí có thể sử dụng chúng để tạo các đối tượng phức tạp với quyền truy cập vào ngữ cảnh phong phú mà chỉ khả dụng trên toàn cầu đối với chúng.

<strong>16. Bạn có thể giải thích ủy quyền sự kiện trong JavaScript là gì không?</strong>
Ủy quyền sự kiện là một kỹ thuật trong đó bạn xác định một trình xử lý sự kiện cho một sự kiện cụ thể như một phần của phần tử cha chứa các phần tử sẽ thực sự kích hoạt sự kiện.

Khi sự kiện được kích hoạt, nó sẽ nổi lên trong hệ thống phân cấp DOM cho đến khi nó đến trình xử lý sự kiện của phần tử cha.

<strong>17. Promise là gì và chúng hoạt động như thế nào?</strong>
Promise là các đối tượng JavaScript đại diện cho việc hoàn thành cuối cùng của một lệnh gọi không đồng bộ. Thông qua các promise, bạn có thể xử lý việc thực hiện thành công hoặc không thành công của lệnh gọi không đồng bộ.

<strong>18. Làm cách nào để bạn tối ưu hóa tài sản trang web để có thời gian tải tốt hơn?</strong>
Có nhiều kỹ thuật khác nhau để cải thiện thời gian tải, tùy thuộc vào loại tài sản, ví dụ:

Các tệp CSS & JavaScript nên được thu nhỏ và nén.
Hình ảnh có thể được nén khi bạn lưu chúng hoặc thông qua việc sử dụng phần mềm chuyên dụng, như JPEGOptim hoặc ImageOptim. Chỉ cần đảm bảo rằng bạn không bị mất bất kỳ chất lượng nào trong quá trình này.
<strong>19. Service worker là gì và chúng được sử dụng để làm gì?</strong>
Service worker là các tập lệnh chạy trong nền của một ứng dụng web, tách biệt với luồng chính của trang web và cung cấp các tính năng như lưu trữ ngoại tuyến, thông báo đẩy và đồng bộ hóa nền.

<strong>20. Chính sách cùng nguồn gốc trong phát triển web là gì?</strong>
Chính sách cùng nguồn gốc là một tính năng bảo mật trong trình duyệt được thiết kế để ngăn trang web này truy cập dữ liệu (như nhập tập lệnh hoặc gửi yêu cầu đến API) từ trang web khác.

Chính sách này giúp bảo vệ người dùng khỏi các tập lệnh độc hại cố gắng đánh cắp dữ liệu nhạy cảm từ các trang web khác, chẳng hạn như cookie, bộ nhớ cục bộ hoặc nội dung.

Một cách để khắc phục hạn chế này là thông qua CORS (Cross-Origin Resource Sharing). Miễn là máy chủ chỉ định miền nào có thể nhận yêu cầu và ứng dụng khách gửi đúng tiêu đề, chúng sẽ có thể tương tác với nhau, ngay cả khi chúng không cùng miền.

Danh sách các câu hỏi thuộc Level cao cấp
<strong>21. Biến CSS là gì và khi nào bạn sẽ sử dụng chúng?</strong>
Cũng giống như các biến trong ngôn ngữ lập trình, các biến CSS có thể được đặt bởi các nhà phát triển và được sử dụng lại trong toàn bộ bảng định kiểu CSS. Chúng rất phù hợp để tập trung các giá trị chung được sử dụng trong toàn bộ mã của trang web.

Chúng cũng được sử dụng nhiều bởi các framework CSS để đặt các hằng số như giá trị của màu sắc (ví dụ: “đen” là “#222” thay vì “000”.-

<strong>22. Bạn sẽ triển khai CSS quan trọng như thế nào để cải thiện thời gian tải được nhận biết của các trang web của bạn?</strong>
Xóa các quy tắc CSS khỏi tệp CSS và đưa chúng vào phần tử “” chính của trang web của bạn.

Bằng cách thực hiện như thế này, bạn sẽ loại bỏ thời gian tải của mã đó, vì nó sẽ tải ngay lập tức sau khi tệp chính tải. Phần còn lại, các quy tắc không quan trọng, có thể được tải sau khi tài nguyên chính tải (tệp CSS chính).

<strong>23. Vòng lặp sự kiện trong JavaScript hoạt động như thế nào?</strong>
Vòng lặp sự kiện là một khái niệm cốt lõi trong JavaScript và nó cho phép thực thi mã không đồng bộ.

Cách thức hoạt động của nó như sau:

Ngăn xếp cuộc gọi: JavaScript thực thi mã của bạn trên một luồng duy nhất bằng cách sử dụng ngăn xếp cuộc gọi, trong đó các lệnh gọi hàm được thêm vào và thực thi lần lượt. Khi một hàm kết thúc, nó sẽ bị xóa khỏi ngăn xếp.
Lệnh gọi không đồng bộ: Đối với các hoạt động không đồng bộ, JavaScript sử dụng API Web do trình duyệt cung cấp. Các hoạt động này được dỡ bỏ khỏi ngăn xếp cuộc gọi và được xử lý riêng biệt.
Hàng đợi tác vụ: Sau khi lệnh gọi không đồng bộ được thực hiện xong, hàm gọi lại của nó được đặt trong hàng đợi tác vụ.
Vòng lặp sự kiện: Vòng lặp sự kiện liên tục kiểm tra ngăn xếp cuộc gọi và hàng đợi tác vụ. Nếu ngăn xếp cuộc gọi trống, nó sẽ lấy tác vụ đầu tiên từ hàng đợi và đẩy nó vào ngăn xếp cuộc gọi để thực thi. Chu kỳ này lặp lại vô thời hạn.
<strong>24. Có những cách nào khác nhau để xử lý các hoạt động không đồng bộ trong JavaScript?</strong>
Có 4 cách chính mà JavaScript cho phép các nhà phát triển xử lý các lệnh gọi không đồng bộ. Cuối cùng, kết quả luôn giống nhau, nhưng cấu trúc cuối cùng của mã và cách lý luận về nó khác nhau đáng kể.

Hàm gọi lại. Chúng cho phép bạn thiết lập một hàm được gọi trực tiếp sau khi thao tác không đồng bộ được thực hiện xong.
Promise. Promise đại diện cho việc hoàn thành cuối cùng của một hoạt động không đồng bộ và chúng cung cấp cú pháp đơn giản và trực quan hơn để chỉ định các hàm gọi lại được gọi khi hoạt động thành công và thất bại.
Async/Await. Sự phát triển cuối cùng của cú pháp promise. Nó chủ yếu là đường cú pháp, nhưng nó làm cho mã không đồng bộ trông đồng bộ, do đó làm cho nó dễ đọc và lý luận hơn rất nhiều.
Trình lắng nghe sự kiện. Trình lắng nghe sự kiện là các hàm gọi lại được kích hoạt khi các sự kiện cụ thể được kích hoạt (thường là do tương tác của người dùng).
<strong>25. Làm cách nào để bạn xử lý quản lý trạng thái trong các ứng dụng một trang?</strong>
Nếu không có framework hoặc thư viện đầy đủ như React hoặc Vue.js, việc xử lý đúng cách việc quản lý trạng thái không phải là một nhiệm vụ dễ dàng.

Một số tùy chọn có sẵn thông qua chính ngôn ngữ là:

Biến toàn cục: Bạn có thể sử dụng biến toàn cục hoặc có lẽ là một đối tượng toàn cục để tập trung trạng thái. Vấn đề với cách tiếp cận này là nó có thể trở nên khá khó quản lý đối với các ứng dụng lớn. Việc duy trì trạng thái cục bộ bên trong các thành phần đơn lẻ cũng khó khăn hơn rất nhiều.
Mô hình mô-đun: Bạn có thể sử dụng mô hình này để đóng gói trạng thái và cung cấp API rõ ràng để quản lý nó. Bạn sẽ phải khởi tạo các phiên bản cục bộ của các mô-đun này cho các thành phần riêng lẻ.
Mô hình Pub/Sub: Tùy chọn này phức tạp hơn và nó tách rời các thay đổi trạng thái bằng kiến trúc hướng sự kiện. Đó là một giải pháp phức tạp hơn, nhưng nó cung cấp tính linh hoạt cao hơn.
Thư viện quản lý trạng thái: Bạn luôn có thể sử dụng một cái gì đó như Redux hoặc các thư viện tương tự mà không cần framework.
<strong>26. DOM ảo hoạt động như thế nào và lợi ích của nó là gì?</strong>
Cách thức hoạt động của DOM ảo như sau:

Toàn bộ giao diện người dùng được sao chép vào một cấu trúc trong bộ nhớ được gọi là “DOM ảo”, là một phiên bản nhẹ của DOM thực tế.
Khi trạng thái thay đổi và UI cần được cập nhật, một DOM ảo mới sẽ được tạo với trạng thái được cập nhật.
Sau đó, một diff được tạo giữa DOM ảo mới và phiên bản trước đó.
Sau đó, hệ thống sẽ tính toán số lượng thay đổi ít nhất cần thiết để đạt được trạng thái mới và nó sẽ áp dụng những thay đổi đó. Chỉ những nút cần được cập nhật mới được chạm vào, điều này giảm thiểu việc thao tác trực tiếp với DOM thực.
Về lợi ích:

Tối ưu hóa hiệu suất: Bằng cách chỉ cập nhật các nút cụ thể trong DOM thực, kỹ thuật này làm giảm số lượng cập nhật, tràn và vẽ lại trên UI. Ảnh hưởng trực tiếp đến hiệu suất của ứng dụng.
Đa nền tảng. DOM ảo cung cấp một lớp trừu tượng giữa ứng dụng và API thực tế hiển thị UI. Điều này có nghĩa là ứng dụng có thể được chuyển sang các nền tảng khác miễn là có triển khai DOM ảo cho nền tảng đó.
Tính nhất quán. Kỹ thuật này giúp UI đồng bộ với trạng thái nội bộ, giảm lỗi và sự không nhất quán.
<strong>27. Render phía máy chủ là gì và khi nào bạn có thể sử dụng nó?</strong>
Render phía máy chủ (SSR) là một kỹ thuật trong đó máy chủ web tạo nội dung HTML của trang web và gửi nó đến máy khách (thường là trình duyệt web) dưới dạng tài liệu được hiển thị đầy đủ. Điều này trái ngược với những gì thường xảy ra với kết xuất phía máy khách (CSR), trong đó trình duyệt tải xuống một trang HTML tối thiểu và sau đó sử dụng JavaScript để hiển thị nội dung một cách linh hoạt.

Có một số trường hợp sử dụng lý tưởng cho SSR:

Trang web giàu nội dung. Ví dụ: trang web tin tức, blog, v.v.
Các ứng dụng nặng về SEO. Khi sự thành công của ứng dụng web phụ thuộc vào SEO, phương pháp này có thể cải thiện đáng kể hiệu suất của trang web (và do đó, hiệu suất SEO).
Các ứng dụng web Progressive. Khi ứng dụng cần hiển thị nhanh để cung cấp trải nghiệm người dùng nhanh chóng và hiệu quả, ứng dụng ban đầu có thể được hiển thị trên máy chủ và sau đó được hydrate trên máy khách để tích hợp tiếp theo.
<strong>28. Làm cách nào để bạn phân tích và cải thiện hiệu suất của một ứng dụng web?</strong>
Bộ số liệu chính cần theo dõi cho các ứng dụng web là:

First Contentful Paint (FCP): Thời gian cho đến khi phần nội dung đầu tiên được hiển thị.
Largest Contentful Paint (LCP): Thời gian cho đến khi phần tử nội dung lớn nhất được hiển thị.
Time to Interactive (TTI): Thời gian cho đến khi trang web có thể tương tác hoàn toàn.
Total Blocking Time (TBT): Tổng thời gian mà luồng chính bị chặn.
Cumulative Layout Shift (CLS): Đo lường sự ổn định trực quan.
<strong>29. Chính sách bảo mật nội dung (CSP) là gì và nó cải thiện bảo mật cho các ứng dụng web như thế nào?</strong>
Chính sách bảo mật nội dung (CSP) là một tiêu chuẩn bảo mật giúp tránh các cuộc tấn công Cross-site Scripting (XSS) và các cuộc tấn công chèn mã khác bằng cách xác định và thực thi danh sách trắng các nguồn được phê duyệt, chẳng hạn như tập lệnh, bảng định kiểu, hình ảnh và các tài nguyên khác.

Những lợi ích chính là:

Bảo mật tốt hơn: CSP giúp bảo vệ trang web và ứng dụng web khỏi nhiều loại tấn công, bao gồm XSS và chèn dữ liệu.
Kiểm soát nhiều hơn: Nhà phát triển có thể xác định các chính sách chi tiết để kiểm soát các nguồn mà từ đó có thể tải nội dung.
Tuân thủ được cải thiện: Giúp đáp ứng các yêu cầu tuân thủ bảo mật, chẳng hạn như các yêu cầu được nêu trong OWASP Top 10.
<strong>30. Tree shaking là gì và nó giúp ích gì cho hiệu suất của một ứng dụng web?</strong>
Tree shaking là một kỹ thuật được sử dụng trong các trình gói mô-đun JavaScript, như Webpack hoặc Vite, để loại bỏ mã không sử dụng khỏi đầu ra được đóng gói cuối cùng.

Những lợi ích chính bao gồm:

Giảm kích thước gói: Loại bỏ mã không sử dụng làm giảm kích thước của gói JavaScript được gửi đến máy khách, cải thiện thời gian tải và giảm mức sử dụng băng thông.
Cải thiện hiệu suất: Kích thước gói nhỏ hơn có thể dẫn đến thời gian phân tích cú pháp và thực thi nhanh hơn, dẫn đến hiệu suất và khả năng phản hồi được cải thiện của ứng dụng web.
Sử dụng tài nguyên tốt hơn: Nhà phát triển có thể viết mã mô-đun mà không phải lo lắng về các phần phụ thuộc không sử dụng làm phình to kích thước gói cuối cùng.

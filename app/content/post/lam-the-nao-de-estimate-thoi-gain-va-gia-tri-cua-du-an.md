---
title: 'Làm thế nào để estimate thời gian và giá trị của dự án'
description: 'Hay còn rất rất nhiều những lời trao đổi của các bạn dev trong dự án như vậy nữa, nên trong bài viết này mình xin chia sẻ một số ý kiến cá nhân trong việc estimate một dự án.'
image: '/images/post-3.png'
date: '06/10/2024'
author: '@nguyenvietmanh'
---

<strong>Estimate dự án</strong>

Sau một thời gian dài làm việc với các dự án, cũng va chạm nhiều câu hỏi của các bạn developer như:

- Ông nào estimate cái dự án này ngắn thế thì đi mà làm?
- Cái chức năng khó thế này sao chỉ có 2h
- Suốt ngày làm đi làm lại cái form login này mà để tận 3 ngày là sao?

<strong>I. Estimate sơ bộ ( với khách hàng )</strong>

Đây là bước đầu tiên để có dự án, và thường là loại estimate này bạn sẽ không có quá nhiều thời gian để phân tích rủi ro ( công ty nào cũng phải chấp nhận rủi ro). Có thể vào một ngày đẹp trời nào đó sếp ném cho một vài yêu cầu dự án từ việc trao đổi với khách hàng bảo anh có yêu cầu bài toán như này chú estimate xem làm mất bao lâu, giá cả như nào rồi mai gửi a nhé.

Hoặc đơn giản như đang ngồi lướt web, bụp cái ông leader ném cho một mớ document của một dự án trời ơi đất hỡi nào đó bảo chú estimate đi xem anh em có làm được không để còn báo sếp.

Vậy là bạn không kịp trở tay luôn. Với vấn đề này thì làm như nào?

Chắc chắn với bạn một điều là khi bạn được giao trọng trách để estimate báo gía với khách hàng có nghĩa là bạn đã chiếm một vị trí quan trọng trong công ty, trong một bộ phận rồi, và bạn được tin là sẽ làm được. Đây chính là cơ hội thử thách với bạn. Tuy nhiên bạn cũng đừng cảm thấy áp lực nhé ( khoảng 7-8 năm estimate dự án fail có, success có thì lâu dần mình cũng thấy quen ), hãy ngồi bình tĩnh đọc cẩn thận một lượt các yêu cầu, tự break những chỗ không hợp lý, tạo file Q/A (question & answer) đề điền những thắc mắc cần clear của mình vào đó. Với những đoạn chưa hợp lý bạn có thể gạch đầu dòng vài solution cho tình huống đó (có thể khách hàng mới nghĩ thôi chứ chưa biết nó có hợp lý hay không)

Cuối cùng là dựa vào những kinh nghiệm đã chiến đấu qua các dự án của mình mà mạnh mẽ đặt bút nháp xem các chức năng lớn hết bao lâu, thời gian nghiên cứu những cái mới bao lâu, ước lượng thời gian fix-bug bao lâu.... Sau đó bạn đã có một file nháp tổng hợp thời gian làm rồi, bạn lại cân nhắc tiếp là bạn có bao nhiêu resource ( con người ) để làm dự án này ( cố gắng xem nếu công ty đang có resource rảnh thì bạn có thể tận dụng) để có thể giảm budget và time làm dự án ( Khách hàng OK ký hợp đồng rồi mới tính chuyện về sau được) sau đó tổng hợp lại và gửi sếp thôi.

Value dự án = resource ( rank, quantity) + time

Sau khi khách hàng đồng ý thì (tèn tén ten, có thể được tăng lương rồi =)) ) và chúng ta đến bước số 2

<strong>II. Estimate chi tiết ( schedule + task)</strong>

<strong>1. Break task</strong>

Công việc này thường là của team lead hoặc PM, bạn có thể chia đầu việc theo 2 tiêu chí sau:

Task by screen ( chia task theo màn hình ) áp dụng với các dự án web, mobile ( có front-end)
Task by feature ( chia task theo chức năng ) thường là các dự án liên quan đến db, hay các phần của dự án mà chạy ngầm bên dưới (back-end), hoặc thiết lập môi trường (server : staging, production, develop)
Bạn cũng có thể mix 2 tiêu chí trên để có được danh sách các công việc cần phải làm một cách chính xác nhất ( mình hay làm như vậy) lấy ví dụ là estimate công việc của một ứng dụng android có sử dụng chức năng login, tự động đăng nhập chẳng hạn thì break như sau:

Làm UI màn hình login
Show lỗi khi valid form (popup, toast)
Show lỗi khi call api (popup)
Màn hình chính sau khi login
Nhưng để chính xác hơn thì mình có thể thêm các task sau:

Xây dựng database ( lưu trữ thông tin user khi login tiện cho việc tự động login lần sau)
Xây dựng logic check network khi call api
Build cache để ứng dụng tăng performance

<strong>2. Thảo luận task</strong>

Sau khi bạn đã break các task ra rồi thì bạn cần thảo luận lại với team để list các các task đó một lượt xem thừa thiếu hay không. ( bạn đừng nghĩ rằng việc break task là cả team cùng làm đầu tiên nhé, tôi dám chắc là 100% người được giao lead dự án đã làm bước 1 phía trên từ khi estimate giá với khách hàng rồi )

Đi từng task một từ nhỏ đến lớn để thảo luận độ phức tạp + thời gian làm ( thu thập ý kiến và update vào schedule)
Bổ sung các task bị thiếu
Hiệu chỉnh thời gian làm các task + resource so với thời gian tổng thể cả dự án
Đưa ra các rủi ro ( ai làm thì hợp lý, nếu đang làm mà nghỉ ốm thì sao, có ai để backup hay không, khi nào thì báo cáo tình hình tiến độ task)

<strong>3. Tạo schedule</strong>

Sau khi team đã có một danh sách task đầy đủ để có bữa kick-off dự án rồi thì chúng ta cần lên priority của các task, chia sprint, milestone cho hợp lý, lịch họp ngày, tuần... và cuối cùng là phân công người làm task. Có 2 phương pháp:

Mọi người tự thảo luận rồi pick task
Leader assign task ( trường hợp ông leader biết năng lực của ae rồi, chứ 1 ông leader trên giời thì không khả thi)
Sau đó thảo luận lại để có thể chia task khó ( ko cần gấp ) cho bạn yếu hơn để training cùng nhau tiến bộ.

Cuối cùng là tạo schedule cho danh sách task đó và nộp lên trên kết thúc công việc estimate.

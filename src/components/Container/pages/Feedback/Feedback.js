import Icons from '~/components/asset/Icons';
import { useState } from 'react';
import classNames from 'classnames/bind';
import style from './Feedback.module.scss';
const cx = classNames.bind(style);
const feedbackItem = [
    {
        content: 'Đề xuất',
        type: 'propose',
        questions: [
            {
                title: '',
                content: `Cảm ơn bạn đã chia sẻ ý kiến và phản hồi lại với chúng tôi! Chúng tôi đánh giá cao sự hỗ trợ của bạn trong việc giữ cho TikTok luôn an toàn và thú vị.`,
            },
        ],
    },
    {
        content: 'Tài khoản & cài đặt',
        icon: <Icons.Down />,
        children: [
            {
                content: 'Tạo tài khoản TikTok',
                type: 'register',
                questions: [
                    {
                        title: 'Cách tạo tài khoản',
                        content: `Cách tạo tài khoản TikTok:    　    
 
                        Đăng ký qua Web:    
                        1. Nhấp vào biểu tượng "Đăng nhập",  rồi nhấp vào "Đăng ký" ở cuối trang   
                        2. Đăng ký bằng email, số điện thoại hoặc tài  khoản mạng xã hội của bạn    
                        3. Sau khi đăng ký, hoàn thành hồ sơ và cá nhân  hóa tên người dùng của bạn    　    
                         
                        Đăng ký trên thiết bị di động:    
                        1. Nhấn vào biểu tượng "Tôi" và đăng  ký bằng email, số điện thoại hoặc tài khoản mạng xã hội của bạn    
                        2. Sau khi đăng ký, hoàn thành hồ sơ và đặt tên cho tài khoản của bạn    　    
                         
                        Lưu ý: Một email/số điện thoại chỉ có thể liên kết với một tài khoản TikTok. `,
                    },
                    {
                        title: 'Không thể tạo tài khoản bằng Instagram',
                        content: `Hiện tại không thể đăng ký tài bằng Instagram. Vui lòng chọn phương thức khác để đăng ký tài khoản TikTok.  `,
                    },
                    {
                        title: 'Gặp sự cố khi tạo tài khoản',
                        content: `Nếu bạn không thể tạo tài khoản, vui lòng làm mới trang và thử lại.    　    
 
                        Nếu bạn vẫn quay lại tài khoản cũ sau khi đăng ký tài khoản mới, rất có thể  bạn đã sử dụng cùng một phương thức đăng nhập với tài khoản cũ. Vui lòng thử lại bằng phương thức đăng nhập khác.    　    
                         
                        Bạn vẫn cần trợ giúp? Vui lòng gửi phản hồi cho chúng tôi với thông tin sau:    
                        1. Phương thức bạn chọn để đăng ký    
                        2. Ảnh chụp màn hình thông báo lỗi. `,
                    },
                ],
            },
            {
                content: 'Đăng nhập',
                type: 'login',
                questions: [
                    {
                        title: 'Tài khoản bị đình chỉ',
                        content: `TikTok cam kết duy trì trải nghiệm an toàn và thú vị, đồng thời có quyền đình chỉ các tài khoản vi phạm Hướng dẫn Cộng đồng của chúng tôi. Nếu bạn cảm thấy quyết định này được đưa ra do nhầm lẫn, hãy gửi khiếu nại để báo cáo vấn đề và cung cấp tên người dùng của bạn (gồm ký tự "@"phía trước).`,
                    },
                    {
                        title: 'Cách đăng nhập',
                        content: `
                        Cách đăng nhập
                        Để đăng nhập vào tài khoản:
                         
                        Đăng nhập trên Web：
                        1. Nhấp vào biểu tượng "Đăng nhập" ở góc trên cùng bên phải
                        2. Chọn phương thức đăng nhập
                        3. Nhập thông tin tài khoản của bạn hoặc tiếp tục với phương thức đăng nhập đã chọn
                         
                        Đăng nhập trên thiết bị di động của TikTok:
                        1. Nhấn vào "Tôi" để đi tới hồ sơ
                        2. Nhấn vào "Đăng ký"
                        3. Nhấn vào "Đăng nhập" ở cuối trang
                        4. Chọn phương thức đăng nhập
                        5. Nhập thông tin tài khoản của bạn hoặc tiếp tục với phương thức đăng nhập đã chọn`,
                    },
                    {
                        title: 'Mật khẩu bị mất hoặc bị đánh cắp',
                        content: `Để đặt lại mật khẩu:
 
                        Đăng ký qua Web:  
                        1. Nhấp vào ảnh hồ sơ của bạn ở góc trên
                        2. Chọn "Đăng xuất"  
                        3. Nhấp vào biểu tượng "Đăng nhập" ở góc trên cùng bên phải
                        4. Chọn "Sử dụng điện thoại/email/tên người dùng"
                        5. Chọn "Email/Tên người dùng".
                        6. Bấm "Quên mật khẩu?".
                        7. Chọn đặt lại mật khẩu bằng email hoặc số điện thoại.
                        8. Làm theo hướng dẫn để cài đặt lại.
                         
                        Đăng ký trên thiết bị di động: 
                        1. Bấm vào biểu tượng "Tôi".
                        2. Bấm vào "…" ở góc trên cùng.
                        3. Kéo xuống phần cuối trang rồi bấm vào "Đăng xuất".
                        4. Bấm vào biểu tượng "Tôi".
                        5. Bấm vào "Đăng ký".
                        6. Bấm vào "Đăng nhập" ở cuối trang.
                        7. Chọn "Sử dụng điện thoại/email/tên người dùng".
                        8. Chọn "Email/Tên người dùng".
                        9. Bấm "Quên mật khẩu?".
                        10. Chọn đặt lại mật khẩu bằng email hoặc số điện thoại.
                        11. Làm theo hướng dẫn để cài đặt lại.
                         
                        Người dùng đăng ký TikTok thông qua tài khoản mạng xã hội khác, sẽ phải đặt lại mật khẩu trên nền tảng đó.
                        `,
                    },
                    {
                        title: 'Không thể đăng nhập bằng Instagram',
                        content: `Đăng nhập Instagram không còn được hỗ trợ. Vui lòng đăng nhập bằng số điện thoại, email hoặc tài khoản mạng xã hội khác của bạn. Nếu bạn không thể đăng nhập, hãy sử dụng ứng dụng TikTok để khôi phục tài khoản của mình.`,
                    },
                    {
                        title: 'Tự động đăng xuất',
                        content: `Nếu có nội dung mới thay đổi trong thông tin đăng nhập hoặc cài đặt thiết bị đang hoạt động, người dùng có thể phải đăng nhập lại.
 
                        Nếu bạn đã đăng xuất và chưa ủy quyền bất kỳ nội dung mới thay đổi nào, tài khoản của bạn có thể đã bị hack và chúng tôi cần thực hiện các biện pháp bảo mật. Hãy đặt lại mật khẩu hoặc báo cáo sự cố của bạn với TikTok ngay lập tức.`,
                    },
                    {
                        title: 'Khác',
                        content: `Bạn không tìm thấy miêu tả vấn đề gặp phải?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới để cung cấp cho chúng tôi chi tiết và ảnh chụp màn hình về sự cố.
                        `,
                    },
                ],
            },
            {
                content: ' Quản lý Tài khoản',
                type: 'accountManagement',
                questions: [
                    {
                        title: 'Cài đặt tài khoản riêng tư hoặc công khai',
                        content: `TikTok trên máy tính:
                        1. Nhấp vào ảnh hồ sơ của bạn ở góc trên
                        2. Chọn "Cài đặt"
                        3. Nhấn vào "Quyền riêng tư".
                        4. Trượt nút chuyển sang phải để đặt là riêng tư và sang bên trái để đặt là công khai.
                         
                        TikTok trên thiết bị di động:
                        1. Đến trang hồ sơ của bạn bằng cách nhấn vào "Tôi".
                        2. Nhấn vào "...” ở góc phía trên bên phải
                        3. Nhấn vào "Quyền riêng tư".
                        4. Trượt nút chuyển sang phải để đặt là riêng tư và sang bên trái để đặt là công khai.
                          
                          Lưu ý: Tất cả Tài khoản Pro đều phải ở trạng thái công khai.`,
                    },
                    {
                        title: 'Xóa tài khoản',
                        content: `Thao tác xóa tài khoản có hiệu lực vĩnh viễn và không thể hoàn tác.
  
                        Cách xóa tài khoản:
                       
                      Với TikTok trên máy tính:
                      1. Nhấp vào ảnh hồ sơ của bạn ở góc trên. 
                      2. Chọn "Cài đặt".
                      3. Nhấn vào "Quản lý tài khoản" > "Xóa tài khoản".
                      4. Làm theo hướng dẫn để xóa tài khoản của bạn.
                        
                      Với TikTok trên thiết bị di động:
                      1. Đến trang hồ sơ của bạn bằng cách nhấn vào "Tôi". 
                      2. Nhấn vào "...” ở góc phía trên bên phải.
                      3. Nhấn vào "Quản lý tài khoản" > "Xóa tài khoản".
                      4. Làm theo hướng dẫn để xóa tài khoản của bạn.
                        
                        Lưu ý rằng sau khi tài khoản của bạn bị xóa:
                        
                      • Bạn sẽ cần tạo tài khoản mới để truy cập TikTok.
                      • Bạn sẽ không thể truy cập những video mình đã đăng.
                      • Bạn sẽ mất quyền truy cập vào các vật phẩm đã mua và không được hoàn tiền.
                      • Các thông tin được chia sẻ, ví dụ như tin nhắn trò chuyện, có thể vẫn hiển thị với những người dùng khác.`,
                    },
                    {
                        title: 'Tài khoản bị hack',
                        content: `Nếu bạn nhận thấy bất kỳ hoạt động đáng ngờ nào dưới đây, tài khoản của bạn có thể đã bị xâm nhập:
                        • Mật khẩu hoặc số điện thoại của bạn bị thay đổi
                        • Tên người dùng hoặc biệt danh của bạn bị thay đổi
                        • Video bị xóa hoặc đăng mà không có sự cho phép của bạn
                        • Tin nhắn không phải do bạn viết được gửi từ tài khoản của bạn
                         
                        Để tìm hiểu thêm về An toàn tài khoản, vui lòng truy cập https://support.tiktok.com/en-hant:true/privacy-safety/hacked-account-en-hant:true .`,
                    },
                ],
            },
            {
                content: 'Email và số điện thại',
                type: 'contact',
                questions: [
                    {
                        title: 'Số điện thoại này đã được đăng ký',
                        content: `Mỗi số điện thoại chỉ có thể được liên kết với một tài khoản TikTok. Để liên kết số điện thoại của bạn với một tài khoản mới, hãy thay đổi số điện thoại đã liên kết với tài khoản hiện tại của bạn hoặc xóa tài khoản đó.
 
                        Tài khoản đã xóa sẽ bị hủy kích hoạt trong 30 ngày, sau đó bị xóa vĩnh viễn. Sau đó, bạn có thể liên kết số điện thoại này với tài khoản mới.
                         
                        Cách tìm tài khoản hiện đang được liên kết với số điện thoại của bạn:
                        Đối với TikTok dành cho máy tính:
                        1. Bấm vào biểu tượng "Đăng nhập"
                        2. Chọn "Sử dụng số điện thoại/email/tên người dùng"
                        3. Nhập số điện thoại của bạn để đăng nhập
                         
                        Từ ứng dụng TikTok:
                        1. Bấm vào "Đăng nhập" ở phía dưới cùng của trang
                        2. Chọn "Sử dụng số điện thoại/email/tên người dùng"
                        3. Nhập số điện thoại của bạn để đăng nhập
                         
                        Nếu số điện thoại của bạn được liên kết với một tài khoản khác:
                        Đối với TikTok dành cho máy tính:
                        1. Sau khi bạn đã đăng xuất, hãy bấm vào "Đăng nhập" ở phía trên cùng
                        2. Bấm vào "Đăng ký"
                        3. Bấm vào "Sử dụng số điện thoại hoặc email"
                        4. Nhập ngày sinh và số điện thoại của bạn
                        5. Nhập mã được gửi tới thiết bị của bạn
                        6. Bạn sẽ thấy ảnh hồ sơ của tài khoản được liên kết với số điện thoại. Nếu đây là tài khoản của bạn, hãy bấm "Thay vào đó, hãy đăng nhập"
                        7. Nếu đây không phải là tài khoản của bạn, hãy bấm "Tiếp tục với số điện thoại này"
                         
                        Từ ứng dụng TikTok:
                        1. Sau khi bạn đăng xuất, hãy bấm "Sử dụng số điện thoại hoặc email" trên màn hình đăng nhập
                        2. Nhập ngày sinh và số điện thoại của bạn
                        3. Bấm "Gửi mã"
                        4. Nhập mã được gửi tới thiết bị của bạn
                        5. Bạn sẽ thấy ảnh hồ sơ của tài khoản được liên kết với số điện thoại. Nếu đây là tài khoản của bạn, hãy bấm "Thay vào đó, hãy đăng nhập"
                        6. Nếu đây không phải là tài khoản của bạn, hãy bấm "Tiếp tục với số điện thoại này"
                         
                        Chúng tôi sẽ xóa số điện thoại khỏi tài khoản kia và liên kết số điện thoại đó với tài khoản mới. Tài khoản trước đó sẽ nhận được thông báo rằng số điện thoại đã được sử dụng để tạo một tài khoản mới.`,
                    },
                    {
                        title: 'Thay đổi số điện thoại/ email liên kết với tài khoản',
                        content: `Xin chào, chúng tôi rất tiếc vì đã gây bất tiện cho bạn. Tính năng này hiện chỉ có trên ứng dụng TikTok. 

                        Để sử dụng tính năng này, vui lòng tìm kiếm và tải xuống phiên bản TikTok mới nhất thông qua Apple App Store hoặc Google Play trên điện thoại của bạn, sau đó làm theo các bước dưới đây:
                        
                        1. Đi đến hồ sơ của bạn bằng cách nhấn vào "Hồ sơ". 
                        2. Nhấn vào biểu tượng "☰" ở góc phía trên bên phải. 
                        3. Chọn "Cài đặt và quyền riêng tư" > "Quản lý tài khoản"> "Số điện thoại" hoặc "Email".
                        4. Xác minh số điện thoại/địa chỉ email hiện tại của bạn để liên kết một số điện thoại/địa chỉ email mới.
                        `,
                    },
                    {
                        title: 'Chưa nhận được mã xác minh số điện thoại',
                        content: `Hãy đảm bảo rằng định dạng của số điện thoại là chính xác. 
                        Bạn cần:
                        1. Chọn đúng mã quốc gia.
                        2. Nhập số điện thoại của bạn mà không cần mã quốc gia và tiền tố 0.
                          
                        Nếu bạn đã nhập chính xác số điện thoại, hãy khởi động lại thiết bị và yêu cầu lại mã xác minh.
                          
                        Lưu ý: Mỗi số điện thoại chỉ có thể được liên kết với một tài khoản.
                        `,
                    },
                    {
                        title: 'Chưa nhận được mã xác minh email',
                        content: `Nếu bạn không nhận được mã xác minh email sau khi nhập địa chỉ email của mình: 
 
                        1. Kiểm tra địa chỉ email của bạn để xác nhận rằng địa chỉ này chính xác. Ví dụ: đảm bảo rằng địa chỉ email không có bất kỳ lỗi chính tả hoặc dấu cách nào. 
                        2. Kiểm tra email của bạn để đảm bảo mã xác minh không bị lọc sang hòm thư rác hoăc các thư mục khác.
                        3. Đảm bảo rằng dung lượng email của bạn không bị đầy. Nếu không còn dung lượng, hãy thử xóa một số email để có thêm dung lượng trống. Sau đó, bạn có thể thử gửi lại email của mình. 
                        Lưu ý: Mỗi email chỉ có thể được liên kết với một tài khoản.`,
                    },
                ],
            },
            {
                content: 'Chỉnh sửa hồ sơ',
                type: 'editProfile',
                questions: [
                    {
                        title: 'Không thể đổi TikTok ID',
                        content: `Cách thay đổi TikTok ID：
                        1. Truy cập trang https://www.tiktok.com.
                        2. Nhấp vào ảnh hồ sơ của bạn ở góc phía trên.
                        3. Chọn "Xem hồ sơ" để truy cập trang hồ sơ.
                        4. Nhấn vào "Chỉnh sửa hồ sơ".
                        5. Nhấn vào TikTok ID của bạn.
                        6. Nhập TikTok ID mới mà bạn muốn sử dụng.
                        
                        Lưu ý:
                        • Bạn chỉ có thể thay đổi TikTok ID một lần trong mỗi 30 ngày. 
                        • TikTok ID chỉ có thể bao gồm chữ cái, số, dấu gạch dưới và dấu chấm. Tuy nhiên, không thể đặt dấu chấm ở cuối TikTok ID.
                        • TikTok ID không giống như tên tài khoản. TikTok ID có định dạng @TikTokID mà những người dùng TikTok khác có thể sử dụng để gắn thẻ hoặc tìm kiếm bạn. Tên tài khoản là tên mà những người dùng khác nhìn thấy trên hồ sơ của bạn.
                        • Tính năng này không có sẵn với trang web TikTok dành cho thiết bị di động.`,
                    },
                    {
                        title: 'Thay đổi ảnh hồ sơ',
                        content: `Cách thêm hoặc thay đổi ảnh hồ sơ:

                        1. Truy cập trang https://www.tiktok.com.
                        2. Nhấp vào ảnh hồ sơ của bạn ở góc phía trên.
                        3. Chọn "Xem hồ sơ" để truy cập trang hồ sơ.
                        4. Nhấn vào "Chỉnh sửa hồ sơ".
                        5. Nhấp vào ảnh hồ sơ hiện tại để thay đổi.
                        
                        Lưu ý: 
                        • Ảnh hồ sơ sẽ không hiển thị trên hồ sơ của bạn sau khi thiết đặt video hồ sơ. 
                        • Ảnh phải có độ phân giải tối thiểu là 20x20 pixel để tải lên. 
                        • Tính năng này không có sẵn với trang web TikTok dành cho thiết bị di động.`,
                    },
                    {
                        title: 'Cập nhật tên tài khoản',
                        content: `Cách cập nhật tên tài khoản:

                        1. Truy cập trang https://www.tiktok.com.
                        2. Nhấp vào ảnh hồ sơ của bạn ở góc phía trên.
                        3. Chọn "Xem hồ sơ" để truy cập trang hồ sơ.
                        4. Nhấn vào "Chỉnh sửa hồ sơ".
                        5. Nhấn vào "Tên". 
                        6. Nhập tên mới bạn muốn sử dụng.
                        7. Nhấn vào "Lưu".
                        
                        Lưu ý: 
                        • Tên không được vượt quá 30 ký tự.
                        • Tính năng này không có sẵn với trang web TikTok dành cho thiết bị di động.`,
                    },
                    {
                        title: 'Đổi tiểu sử tài khoản',
                        content: `Cách cập nhật tiểu sử của bạn:

                        1. Truy cập trang https://www.tiktok.com.
                        2. Nhấp vào ảnh hồ sơ của bạn ở góc phía trên.
                        3. Chọn "Xem hồ sơ" để truy cập trang hồ sơ.
                        4. Nhấn vào "Chỉnh sửa hồ sơ".
                        5. Nhấn vào "Tiểu sử". 
                        6. Nhập tiểu sử mới.
                        7. Nhấn vào "Lưu".
                        
                        Lưu ý: 
                        • Tiểu sử không được vượt quá 80 ký tự.
                        • Tính năng này không có sẵn với trang web TikTok dành cho thiết bị di động.`,
                    },
                    {
                        title: 'Khác',
                        content: `Không thể tìm ra sự cố bạn đã gặp phải? Hãy nhấn nút "Cần thêm trợ giúp?" bên dưới để cung cấp cho chúng tôi thông tin chi tiết và ảnh chụp màn hình của sự cố.`,
                    },
                ],
            },
            {
                content: 'Trang Hồ sơ',
                type: 'myProfile',
                questions: [
                    {
                        title: 'Không thể xem danh sách video',
                        content: `Vui lòng thực hiện theo các bước sau:
 
                        TikTok trên máy tính:
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                         
                        TikTok trên thiết bị di động:
                        - Chuyển đổi giữa Wi-Fi và dữ liệu di động
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                        - Khởi động lại thiết bị của bạn
                         
                         Sự cố vẫn tiếp diễn?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.
                        `,
                    },
                    {
                        title: 'Không thể xem danh sách video đã thích',
                        content: `Vui lòng thực hiện theo các bước sau:
 
                        TikTok trên máy tính:
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                         
                        TikTok trên thiết bị di động:
                        - Chuyển đổi giữa Wi-Fi và dữ liệu di động
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                        - Khởi động lại thiết bị của bạn
                         
                         Sự cố vẫn tiếp diễn?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                    {
                        title: 'Khác',
                        content: `Bạn không tìm thấy miêu tả vấn đề gặp phải?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới để cung cấp cho chúng tôi chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                ],
            },
        ],
    },
    {
        content: 'Đề xuất/Tìm kiếm/Chia sẻ/Nhúng',
        icon: <Icons.Down />,
        children: [
            {
                content: 'Tìm kiếm',
                type: 'search',
                questions: [
                    {
                        title: 'Tìm kiếm nội dung',
                        content: `TikTok Desktop Web hiện chỉ hỗ trợ tìm kiếm tác giả và các video. Bạn có thể tìm kiếm một tác giả hoặc video cụ thể thông qua thanh tìm kiếm nằm ở đầu trang của TikTok Desktop Web.
                        Lưu ý: Tính năng này không khả dụng cho TikTok Mobile Web. `,
                    },
                    {
                        title: 'Không thể tìm người dùng hoặc nội dung cụ thể',
                        content: `Vui lòng thực hiện theo các bước sau:
                        1. Làm mới trang
                        2. Khởi động lại trình duyệt
                         
                        Lưu ý: Tính năng này không khả dụng cho TikTok trên thiết bị di động.`,
                    },
                    {
                        title: 'Khác',
                        content: `Bạn không thể tìm thấy vấn đề mà mình gặp phải? Nhấn nút "Vẫn gặp sự cố" bên dưới để cung cấp chi tiết và ảnh chụp màn hình về vấn đề cho chúng tôi.`,
                    },
                ],
            },
            {
                content: 'Khám phá',
                type: 'decovery',
                questions: [
                    {
                        title: 'Tôi không thích tài khoản/âm thanh/hashtag được đề xuất',
                        content: `Cảm ơn bạn đã chia sẻ ý kiến và phản hồi lại với chúng tôi! Chúng tôi đánh giá cao sự hỗ trợ của bạn trong việc giữ cho TikTok luôn an toàn và thú vị.`,
                    },
                    {
                        title: 'Khác',
                        content: `Bạn không tìm thấy miêu tả vấn đề gặp phải?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới để cung cấp cho chúng tôi chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                ],
            },
            {
                content: 'Bảng tin',
                type: 'news',
                questions: [
                    {
                        title: 'Tôi không thích video trên trang "Dành cho bạn"',
                        content: `Cảm ơn bạn đã chia sẻ ý kiến và phản hồi lại với chúng tôi! Chúng tôi đánh giá cao sự hỗ trợ của bạn trong việc giữ cho TikTok luôn an toàn và thú vị.`,
                    },
                    {
                        title: 'Không có video trên bảng tin',
                        content: `Vui lòng thực hiện theo các bước sau:
 
                        TikTok trên máy tính:
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                         
                        TikTok trên thiết bị di động:
                        - Chuyển đổi giữa Wi-Fi và dữ liệu di động
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                        - Khởi động lại thiết bị của bạn
                         
                         Sự cố vẫn tiếp diễn?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                    {
                        title: 'Khác',
                        content: `Bạn không tìm thấy miêu tả vấn đề gặp phải?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới để cung cấp cho chúng tôi chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                ],
            },
            {
                content: 'Nhúng',
                type: 'shareLink',
                questions: [
                    {
                        title: 'Cách lấy mã nhúng của video TikTok',
                        content: `Để nhúng video TikTok:
                        1. Mở video bạn muốn nhận mã nhúng ở chế độ toàn màn hình
                        2. Nhấn vào biểu tượng "Nhúng"
                        3. Nhấn vào "Sao chép mã"
                         
                        Lưu ý: Tính năng này không khả dụng TikTok trên thiết bị di động.`,
                    },
                    {
                        title: 'Khác',
                        content: `Bạn không tìm thấy miêu tả vấn đề gặp phải?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới để cung cấp cho chúng tôi chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                ],
            },
            {
                content: 'Chia sẻ',
                type: 'share',
                questions: [
                    {
                        title: 'Cách chia sẻ video',
                        content: `Cách chia sẻ video:
  
                        1. Mở video mà bạn muốn chia sẻ.
                        2. Nhấn vào biểu tượng "Chia sẻ".
                        3. Chọn cách bạn muốn chia sẻ video đó.
                        4. Làm theo hướng dẫn của kênh mà bạn chọn.`,
                    },
                    {
                        title: 'Tôi không thể chia sẻ video',
                        content: `Vui lòng thực hiện theo các bước sau:
 
                        TikTok trên máy tính:
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                         
                        TikTok trên thiết bị di động:
                        - Chuyển đổi giữa Wi-Fi và dữ liệu di động
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                        - Khởi động lại thiết bị của bạn
                         
                         Sự cố vẫn tiếp diễn?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                    {
                        title: 'Khác',
                        content: `Bạn không tìm thấy miêu tả vấn đề gặp phải?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới để cung cấp cho chúng tôi chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                ],
            },
        ],
    },
    {
        content: 'Video và Âm thanh',
        icon: <Icons.Down />,
        children: [
            {
                content: 'Phát video',
                type: 'videoPlay',
                questions: [
                    {
                        title: 'Video không phát',
                        content: `Vui lòng thực hiện theo các bước sau:
 
                        TikTok trên máy tính:
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                         
                        TikTok trên thiết bị di động:
                        - Chuyển đổi giữa Wi-Fi và dữ liệu di động
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                        - Khởi động lại thiết bị của bạn
                         
                         Sự cố vẫn tiếp diễn?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                    {
                        title: 'Video bị giật lag khi xem',
                        content: `Vui lòng thực hiện theo các bước sau:
 
                        TikTok trên máy tính:
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                         
                        TikTok trên thiết bị di động:
                        - Chuyển đổi giữa Wi-Fi và dữ liệu di động
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                        - Khởi động lại thiết bị của bạn
                         
                         Sự cố vẫn tiếp diễn?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                    {
                        title: 'Âm thanh không phát',
                        content: `Vui lòng thực hiện theo các bước sau:
 
                        TikTok trên máy tính:
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                         
                        TikTok trên thiết bị di động:
                        - Chuyển đổi giữa Wi-Fi và dữ liệu di động
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                        - Khởi động lại thiết bị của bạn
                         
                         Sự cố vẫn tiếp diễn?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                    {
                        title: 'Khác',
                        content: `Bạn không tìm thấy miêu tả vấn đề gặp phải?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới để cung cấp cho chúng tôi chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                ],
            },
            {
                content: 'Chế độ toàn màn hình',
                type: 'fullScreen',
                questions: [
                    {
                        title: 'Cách phát video ở chế độ toàn màn hình',
                        content: `Để phát video ở chế độ toàn màn hình, hãy nhấp một lần vào video.`,
                    },
                    {
                        title: 'Khác',
                        content: `Bạn không tìm thấy miêu tả vấn đề gặp phải?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới để cung cấp cho chúng tôi chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                ],
            },
            {
                content: 'Đăng video',
                type: 'videoUpload',
                questions: [
                    {
                        title: 'Đã bị chặn đăng',
                        content: `TikTok cam kết duy trì trải nghiệm an toàn và thú vị, đồng thời có quyền đình chỉ các tài khoản vi phạm Hướng dẫn Cộng đồng của chúng tôi. Nếu bạn cảm thấy quyết định này được đưa ra do nhầm lẫn, hãy gửi khiếu nại để báo cáo vấn đề và cung cấp tên người dùng của bạn (gồm ký tự "@"phía trước).`,
                    },
                    {
                        title: 'Lên lịch cho video',
                        content: `Cách sử dụng tính năng này:
                        1. Đăng nhập vào tài khoản của bạn trên trang web TikTok dành cho máy tính và bấm vào biểu tượng "Tải lên" ở phía trên cùng của bảng tin.
                        2. Tải lên video mà bạn muốn đặt lịch trình.
                        3. Sau khi tải lên và chỉnh sửa, hãy gạt nút lịch trình và chọn ngày & giờ để lên lịch cho bài đăng của bạn. (Múi giờ được đặt mặc định theo cài đặt trên máy tính.) 
                        4. Bấm vào lịch trình để thiết lập bài đăng của bạn! 
                        Lưu ý:
                        1. Chỉ "Tài khoản doanh nghiệp" mới có thể sử dụng tính năng lập lịch trình trên máy tính. 
                        2. Bạn có thể xem các bài đăng đã được lên lịch trình trong chế độ xem Hồ sơ. Bạn không thể chỉnh sửa nhưng lại có thể xóa những bài đăng này.
                        3. Khi một video đã lên lịch được đăng trong ứng dụng, bạn sẽ nhận được thông báo đẩy, cho biết rằng bài đăng của bạn đã được phát hành.
                        4. Bạn có thể lên lịch tối thiểu 15 phút và tối đa 10 ngày trước khi phát hành. 
                        5. Tính năng này không dùng được trên trang web TikTok dành cho di động.`,
                    },
                    {
                        title: 'Không thể đăng video',
                        content: `Vui lòng thực hiện theo các bước sau:
                        1. Làm mới trang
                        2. Khởi động lại trình duyệt
                         
                        Lưu ý: Tính năng này không khả dụng cho TikTok trên thiết bị di động.`,
                    },
                    {
                        title: 'Âm thanh và video không đồng bộ',
                        content: `Vui lòng thực hiện theo các bước sau:
                        1. Làm mới trang
                        2. Khởi động lại trình duyệt
                         
                        Lưu ý: Tính năng này không khả dụng cho TikTok trên thiết bị di động.`,
                    },
                    {
                        title: 'Khác',
                        content: `Bạn không tìm thấy miêu tả vấn đề gặp phải?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới để cung cấp cho chúng tôi chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                ],
            },
            {
                content: 'Âm thanh',
                type: 'sound',
                questions: [
                    {
                        title: 'Không thể phát âm thanh',
                        content: `Vui lòng thực hiện theo các bước sau:
 
                        TikTok trên máy tính:
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                         
                        TikTok trên thiết bị di động:
                        - Chuyển đổi giữa Wi-Fi và dữ liệu di động
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                        - Khởi động lại thiết bị của bạn
                         
                         Sự cố vẫn tiếp diễn?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                    {
                        title: 'Khác',
                        content: `Bạn không tìm thấy miêu tả vấn đề gặp phải?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới để cung cấp cho chúng tôi chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                ],
            },
            {
                content: 'Thiếu video',
                type: 'missingVideo',
                questions: [
                    {
                        title: 'Video của tôi đã bị xóa do vi phạm  Hướng dẫn Cộng đồng',
                        content: `TikTok cam kết duy trì trải nghiệm an toàn và thú vị, đồng thời có quyền đình chỉ các tài khoản vi phạm Hướng dẫn Cộng đồng của chúng tôi. Nếu bạn cảm thấy quyết định này được đưa ra do nhầm lẫn, hãy gửi khiếu nại để báo cáo vấn đề và cung cấp tên người dùng của bạn (gồm ký tự "@"phía trước).`,
                    },
                    {
                        title: '',
                        content: `Bạn không tìm thấy miêu tả vấn đề gặp phải?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới để cung cấp cho chúng tôi chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                ],
            },
            {
                content: 'Khác',
                type: 'other',
                questions: [
                    {
                        title: 'Cách xóa video đã đăng',
                        content: `Cách xóa video:
  
                        1. Mở video mà bạn muốn xóa.
                        2. Nhấn vào "...".
                        3. Chọn "Xóa".
                         
                        Lưu ý: Tính năng này không khả dụng TikTok trên thiết bị di động.`,
                    },
                    {
                        title: 'Khác',
                        content: `Bạn không tìm thấy miêu tả vấn đề gặp phải?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới để cung cấp cho chúng tôi chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                ],
            },
        ],
    },
    {
        content: 'Theo dõi/Thích/Bình luận',
        icon: <Icons.Down />,
        children: [
            {
                content: 'Theo dõi',
                type: 'follow',
                questions: [
                    {
                        title: 'Theo dõi và bỏ theo dõi người dùng',
                        content: `TikTok trên máy tính:
 
                        Để theo dõi người dùng:
                        1. Đi tới trang hồ sơ của người dùng đó
                        2. Nhấn vào "Follow"
                        Hoặc
                        Nhấn vào "Follow" bên cạnh ảnh hồ sơ của người dùng
                         
                        Để bỏ theo dõi người dùng:
                        1. Đi tới trang hồ sơ của người dùng đó
                        2. Nhấn vào "Đang Follow"
                         
                        TikTok trên thiết bị di động:
                        Để theo dõi người dùng:
                        1. Đi tới trang hồ sơ của người dùng đó
                        2. Nhấn vào "Follow"
                        Hoặc
                        Nhấn vào dấu "+" bên dưới ảnh hồ sơ của người dùng trên màn hình video
                         
                        Để bỏ theo dõi người dùng:
                        1. Đi tới trang hồ sơ của người dùng đó
                        2. Nhấn vào "Đang Follow"
                        `,
                    },
                    {
                        title: ' "Theo dõi quá nhanh"',
                        content: `Bạn nhận được thông báo này nếu bạn đang theo dõi các tài khoản khác quá nhanh, điều này có thể tạm thời vô hiệu hóa tài khoản của bạn.`,
                    },
                    {
                        title: 'Không thể theo dõi người dùng khác',
                        content: `Vui lòng thực hiện theo các bước sau:
 
                        TikTok trên máy tính:
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                         
                        TikTok trên thiết bị di động:
                        - Chuyển đổi giữa Wi-Fi và dữ liệu di động
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                        - Khởi động lại thiết bị của bạn
                         
                         Sự cố vẫn tiếp diễn?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                    {
                        title: 'Số người đang theo dõi không chính xác',
                        content: `Vui lòng thực hiện theo các bước sau:
 
                        TikTok trên máy tính:
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                         
                        TikTok trên thiết bị di động:
                        - Chuyển đổi giữa Wi-Fi và dữ liệu di động
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                        - Khởi động lại thiết bị của bạn
                         
                         Sự cố vẫn tiếp diễn?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                    {
                        title: 'Số người theo dõi không chính xác',
                        content: `Vui lòng thực hiện theo các bước sau:
 
                        TikTok trên máy tính:
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                         
                        TikTok trên thiết bị di động:
                        - Chuyển đổi giữa Wi-Fi và dữ liệu di động
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                        - Khởi động lại thiết bị của bạn
                         
                         Sự cố vẫn tiếp diễn?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                    {
                        title: 'Khác',
                        content: `Bạn không tìm thấy miêu tả vấn đề gặp phải?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới để cung cấp cho chúng tôi chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                ],
            },
            {
                content: 'Thích',
                type: 'like',
                questions: [
                    {
                        title: '"Bấm quá nhanh"',
                        content: `Bạn nhận được thông báo này nếu bạn thích các nội dung quá nhanh, điều này có thể tạm thời vô hiệu hóa tài khoản của bạn.`,
                    },
                    {
                        title: ' Không thể thích',
                        content: `Vui lòng thực hiện theo các bước sau:
 
                        TikTok trên máy tính:
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                         
                        TikTok trên thiết bị di động:
                        - Chuyển đổi giữa Wi-Fi và dữ liệu di động
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                        - Khởi động lại thiết bị của bạn
                         
                         Sự cố vẫn tiếp diễn?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                    {
                        title: 'Số lượt thích không chính xác',
                        content: `Vui lòng thực hiện theo các bước sau:
 
                        TikTok trên máy tính:
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                         
                        TikTok trên thiết bị di động:
                        - Chuyển đổi giữa Wi-Fi và dữ liệu di động
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                        - Khởi động lại thiết bị của bạn
                         
                         Sự cố vẫn tiếp diễn?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                    {
                        title: 'Khác',
                        content: `Bạn không tìm thấy miêu tả vấn đề gặp phải?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới để cung cấp cho chúng tôi chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                ],
            },
            {
                content: 'Bình luận',
                type: 'comment',
                questions: [
                    {
                        title: 'Không thể tải bình luận',
                        content: `Vui lòng thực hiện theo các bước sau:
 
                        TikTok trên máy tính:
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                         
                        TikTok trên thiết bị di động:
                        - Chuyển đổi giữa Wi-Fi và dữ liệu di động
                        - Làm mới trang
                        - Khởi động lại trình duyệt
                        - Khởi động lại thiết bị của bạn
                         
                         Sự cố vẫn tiếp diễn?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                    {
                        title: 'Khác',
                        content: `Bạn không tìm thấy miêu tả vấn đề gặp phải?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới để cung cấp cho chúng tôi chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                ],
            },
        ],
    },
    {
        content: 'Thông báo/Tin nhắn',
        icon: <Icons.Down />,
        children: [
            {
                content: 'Thông báo hộp thư đến',
                type: 'notifycationInbox',
                questions: [
                    {
                        title: 'Không thể nhận được thông báo hộp thư đến',
                        content: `Vui lòng thực hiện theo các bước sau:
 
                        TikTok trên máy tính:
                        • Làm mới trang
                        • Khởi động lại trình duyệt
                         
                        TikTok trên thiết bị di động:
                        • Chuyển đổi giữa Wi-Fi và dữ liệu di động
                        • Làm mới trang
                        • Khởi động lại trình duyệt
                        • Khởi động lại thiết bị của bạn
                         
                         Sự cố vẫn tiếp diễn?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                    {
                        title: 'Khác',
                        content: `Bạn không thể tìm thấy vấn đề mà mình gặp phải? 
                        Nhấn vào "Vẫn gặp sự cố" bên dưới để cung cấp chi tiết và ảnh chụp màn hình về vấn đề cho chúng tôi.`,
                    },
                ],
            },
            {
                content: 'Thông báo đẩy',
                type: 'notifycationPush',
                questions: [
                    {
                        title: 'Cá nhân hóa Thông báo đẩy',
                        content: `Cách tùy chỉnh thông báo đẩy:
 
                        1. Nhấp vào ảnh hồ sơ của bạn ở góc trên
                        2. Chọn "Cài đặt"
                        3. Chọn “Thông báo đẩy".
                        4. Bật hoặc tắt một số thông báo
                         
                        Lưu ý: Tính năng này không khả dụng cho TikTok Mobile Web. `,
                    },
                    {
                        title: 'Không thể nhận thông báo đẩy',
                        content: `Vui lòng thực hiện theo các bước sau:
                        1. Làm mới trang
                        2. Khởi động lại trình duyệt
                         
                        Lưu ý: Tính năng này không khả dụng cho TikTok trên thiết bị di động.`,
                    },
                    {
                        title: 'Khác',
                        content: `Vui lòng thực hiện theo các bước sau:
 
                        • Làm mới trang
                        • Khởi động lại trình duyệt
                         
                         Sự cố vẫn tiếp diễn?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.
                         
                        Lưu ý: Tính năng này không khả dụng cho TikTok trên thiết bị di động.`,
                    },
                ],
            },
            {
                content: 'Tin nhắn',
                type: 'message',
                questions: [
                    {
                        title: 'Tính năng nhắn tin không còn khả dụng',
                        content: `Là một phần trong cam kết không ngừng cải thiện sự an toàn trên TikTok, chúng tôi quyết định đưa ra các hạn chế mới về tính năng Nhắn tin trực tiếp của người dùng.
                        Chỉ những người từ 16 tuổi trở lên mới có thể gửi và nhận Tin nhắn. Người dùng không đáp ứng yêu cầu về độ tuổi để sử dụng Nhắn tin trực tiếp sẽ không còn quyền truy cập vào tính năng này. 
                        Cảm ơn bạn đã liên hệ với TikTok.
                        
                        Lưu ý: Tính năng này không có sẵn với trang web TikTok dành cho thiết bị di động.`,
                    },
                    {
                        title: 'Không thể gửi tin nhắn',
                        content: `Để gửi tin nhắn:
                        1. Bật tính năng tin nhắn tại phần cài đặt "Quyền riêng tư" trong ứng dụng trên điện thoại của bạn.
                        2. Liên kết số điện thoại với tài khoản.
                        3. Đảm bảo rằng hai bạn đang follow lẫn nhau.  
                          
                        Vẫn gặp sự cố? Vui lòng cung cấp cho chúng tôi ảnh chụp màn hình của trang có thông báo lỗi khi bạn gửi tin nhắn nhé.
                        Lưu ý: Tính năng này không có sẵn với trang web TikTok dành cho thiết bị di động.`,
                    },
                    {
                        title: 'Không thể nhận tin nhắn',
                        content: `Hãy đảm bảo:
                        1. Hai người đang follow lẫn nhau
                        2. Bật tính năng tin nhắn tại phần cài đặt "Quyền riêng tư" trong ứng dụng trên điện thoại của bạn.
                          
                        Hãy thử thực hiện các bước sau đây:
                        1. Chuyển đổi giữa Wi-Fi và dữ liệu di động.
                        2. Làm mới trang tin nhắn của bạn.
                        
                        Lưu ý: Tính năng này không có sẵn với trang web TikTok dành cho thiết bị di động.`,
                    },
                    {
                        title: 'Khác',
                        content: `Bạn không thể tìm thấy vấn đề mà mình gặp phải? 
                        Nhấn vào "Vẫn gặp sự cố" bên dưới để cung cấp chi tiết và ảnh chụp màn hình về vấn đề cho chúng tôi.`,
                    },
                ],
            },
        ],
    },
    {
        content: 'LIVE',
        icon: <Icons.Down />,
        children: [
            {
                content: 'Tổ chức LIVE',
                type: 'LIVETream',
                questions: [
                    {
                        title: 'LIVE đã bị đình chỉ',
                        content: `TikTok cam kết duy trì trải nghiệm LIVE an toàn và tích cực, đồng thời, có toàn quyền đình chỉ những tài khoản vi phạm Hướng dẫn Cộng đồng của chúng tôi.
                        `,
                    },
                    {
                        title: 'Tôi không thể bắt đầu LIVE',
                        content: `TikTok LIVE cho phép người dùng và nhà sáng tạo tương tác theo thời gian thực. Người dùng từ 16 tuổi trở lên có thể truy cập LIVE và người dùng từ 18 tuổi trở lên có thể gửi và nhận quà trong video LIVE. 

                        Hãy nhớ tuân thủ Hướng dẫn Cộng đồng và Điều khoản Dịch vụ của chúng tôi để thúc đẩy môi trường thú vị, tích cực và tôn trọng trên TikTok.
                        
                        Lưu ý: Tính năng này không có sẵn với trang web TikTok dành cho thiết bị di động.`,
                    },
                    {
                        title: 'Tôi không thể xem một số bình luận trong LIVE của mình',
                        content: `Nếu LIVE của bạn thiếu hoặc không hiển thị một số bình luận từ người xem, vui lòng đảm bảo rằng người xem có bình luận bị thiếu đó không bị cấm gửi bình luận trong LIVE do vi phạm Hướng dẫn Cộng đồng và bạn hoặc người kiểm duyệt LIVE không tắt tiếng người đó. Nếu bạn đã xác nhận với người xem của mình về các tình huống trên, vui lòng gửi phản hồi bằng cách nhấn vào nút "Bạn cần thêm trợ giúp?" ở bên dưới, đồng thời cung cấp các thông tin sau đây:
                        1. Tên người dùng hiển thị dưới dạng @XXX của người xem có bình luận bị thiếu
                        2. Ảnh chụp màn hình chính xác bình luận từ người xem LIVE
                        
                        Lưu ý: Tính năng này không có sẵn với trang web TikTok dành cho thiết bị di động.`,
                    },
                ],
            },
            {
                content: 'LIVE',
                type: 'LIVEWatch',
                questions: [
                    {
                        title: 'Tôi không tìm thấy bất kỳ LIVE nào trên TikTok',
                        content: `Vui lòng thực hiện theo các bước sau:

                        TikTok trên máy tính:
                        • Làm mới trang
                        • Khởi động lại trình duyệt
                        
                        TikTok trên thiết bị di động:
                        • Chuyển đổi giữa Wi-Fi và dữ liệu di động
                        • Làm mới trang
                        • Khởi động lại trình duyệt
                        • Khởi động lại thiết bị của bạn
                        
                         Sự cố vẫn tiếp diễn?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                    {
                        title: 'Tôi không thể gửi/xem các bình luận trong LIVE',
                        content: `Nếu một số bình luận của bạn bị thiếu hoặc không được hiển thị trong LIVE, vui lòng đảm bảo rằng bạn không bị cấm gửi bình luận trong LIVE do vi phạm Hướng dẫn Cộng đồng và bạn không bị chủ phòng hay người kiểm duyệt LIVE tắt tiếng. Nếu bạn đã kiểm tra các tình huống trên, vui lòng gửi phản hồi bằng cách nhấn vào nút "Bạn cần thêm trợ giúp?" ở bên dưới, đồng thời cung cấp các thông tin sau đây:
                        1. TikTok ID của bạn hiển thị dưới dạng @XXX 
                        2. Ảnh chụp màn hình chính xác bình luận bị thiếu
                        
                        Lưu ý: Tính năng này không có sẵn với trang web TikTok dành cho thiết bị di động.`,
                    },
                    {
                        title: 'LIVE bị trễ/đóng băng',
                        content: `Vui lòng thực hiện theo các bước sau:

                        TikTok trên máy tính:
                        • Làm mới trang
                        • Khởi động lại trình duyệt
                        
                        TikTok trên thiết bị di động:
                        • Chuyển đổi giữa Wi-Fi và dữ liệu di động
                        • Làm mới trang
                        • Khởi động lại trình duyệt
                        • Khởi động lại thiết bị của bạn
                        
                         Sự cố vẫn tiếp diễn?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                    {
                        title: 'LIVE luôn ở trạng thái đang tải/Không có hình ảnh hoặc âm thanh, chỉ có bình luận trong LIVE',
                        content: `Vui lòng thực hiện theo các bước sau:

                        TikTok trên máy tính:
                        • Làm mới trang
                        • Khởi động lại trình duyệt
                        
                        TikTok trên thiết bị di động:
                        • Chuyển đổi giữa Wi-Fi và dữ liệu di động
                        • Làm mới trang
                        • Khởi động lại trình duyệt
                        • Khởi động lại thiết bị của bạn
                        
                         Sự cố vẫn tiếp diễn?
                        Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                    {
                        title: 'Không có âm thanh trong LIVE',
                        content: `Vui lòng thử chuyển từ Wi-Fi sang dữ liệu di động hoặc ngược lại để xem sự cố đã được khắc phục hay chưa. Nếu sự cố vẫn tiếp diễn, vui lòng gửi cho chúng tôi bản ghi màn hình của sự cố kèm theo các thông tin sau đây để chúng tôi phân tích thêm:
                        1. Thời gian xảy ra sự cố
                        2. TikTok ID của chủ phòng hiển thị ở định dạng @XXX
                        Để gửi video quay màn hình, bạn có thể chọn một trong các phương pháp sau:
                        1. Đăng video trên ỨNG DỤNG của chúng tôi và gửi liên kết video cho chúng tôi thông qua [báo cáo sự cố].
                        2. Gửi video tới email của chúng tôi: feedback@tiktok.com (vui lòng ghi rõ TikTok ID của bạn trong email). `,
                    },
                    {
                        title: 'Các sự cố khác khi tổ chức LIVE',
                        content: `Bạn không tìm thấy sự cố mình gặp phải trong khi làm chủ phòng LIVE trên trang web TikTok dành cho máy tính (tiktok.com)?
                        Hãy nhấn vào "Cần thêm trợ giúp" ở bên dưới để cung cấp thông tin chi tiết và ảnh chụp màn hình của sự cố.`,
                    },
                ],
            },
        ],
    },
    {
        content: 'Báo cáo lạm dụng',
        icon: <Icons.Down />,
        children: [
            {
                content: 'Cách báo cáo',
                type: 'reportMethod',
                questions: [
                    {
                        title: 'Báo cáo tài khoản',
                        content: `Để báo cáo một tài khoản:
                        1. Truy cập vào trang hồ sơ của tài khoản mà bạn muốn báo cáo
                        2. Nhấn vào "..."
                        3. Nhấn vào "Báo cáo"
                        4. Làm theo các hướng dẫn trên màn hình`,
                    },
                    {
                        title: 'Báo cáo video',
                        content: `Để báo cáo video:
                        1. Mở video đó
                        2. Nhấn vào "Báo cáo"
                        3. Làm theo các hướng dẫn trên màn hình`,
                    },
                    {
                        title: 'Báo cáo âm thanh',
                        content: `Để báo cáo âm thanh:
                        1. Mở âm thanh mà bạn muốn báo cáo
                        2. Nhấn vào "..."
                        3. Nhấn vào "Báo cáo"
                        4. Làm theo các hướng dẫn trên màn hình`,
                    },
                    {
                        title: 'Báo cáo LIVE',
                        content: `Nội dung không tuân thủ Nguyên tắc Cộng đồng của chúng tôi có thể bị báo cáo bất kỳ lúc nào.
                        Cách báo cáo một phiên LIVE:
                        
                        1. Truy cập vào trang LIVE mà bạn muốn báo cáo.
                        2. Nhấn vào biểu tượng "...".
                        3. Nhấn vào "Báo cáo".
                        4. Làm theo hướng dẫn trên màn hình.
                        `,
                    },
                ],
            },
        ],
    },
    {
        content: 'Số dư TikTok',
        icon: <Icons.Down />,
        children: [
            {
                content: 'Nạp điểm',
                type: 'loadPoint',
                questions: [
                    {
                        title: 'Điểm là gì? Làm cách nào để nạp điểm?',
                        content: `Điểm là các quà tặng ảo được sử dụng trên TikTok. Để biết thông tin về Điểm và cách sử dụng Điểm, vui lòng tham khảo Chính sách quà tặng ảo của TikTok: https://www.tiktok.com/legal/virtual-items
                        Bạn có thể nạp Điểm trên trang web bằng cách thực hiện như sau: 
                        1. Truy cập https://www.tiktok.com/coin
                        2. Nhấn vào gói Điểm mà bạn muốn mua.
                        3. Chọn phương thức thanh toán mong muốn để thanh toán gói Điểm.
                        Lưu ý: Bạn có thể quản lý phương thức thanh toán của mình bằng cách nhấp vào nút "Quản lý" trên trang mà bạn chọn phương thức thanh toán khi thanh toán gói Điểm.`,
                    },
                    {
                        title: 'Tại sao tính năng mua hàng hiện không có sẵn?',
                        content: `Nếu tính năng mua hàng của bạn tạm thời không có sẵn, có thể là vì những lý do sau: 
                        1. Bạn đã vi phạm Hướng dẫn cộng đồng của chúng tôi. TikTok cam kết duy trì một môi trường ứng dụng an toàn và tích cực cho người dùng. Theo đó, TikTok không dung thứ cho bất kỳ hành động nào vi phạm Hướng dẫn cộng đồng của chúng tôi và chúng tôi sẽ tiến hành xử lý vi phạm theo quy định nếu phát hiện bất kỳ nội dung nào vi phạm Hướng dẫn cộng đồng.
                        2. Khi chúng tôi phát hiện bất kỳ giao dịch bất thường nào trên tài khoản của bạn, bạn tạm thời không thể sử dụng tính năng nạp điểm vì lý do bảo mật. 
                        3. Nhằm đảm bảo sự an toàn và sức khỏe của người dùng, chúng tôi có thể áp dụng giới hạn chi tiêu đối với giao dịch mua Điểm.`,
                    },
                    {
                        title: 'Tại sao tôi không đủ điều kiện mua Điểm?',
                        content: `Nếu bạn đủ điều kiện mua hàng nhưng không thể hoàn tất thanh toán, vui lòng kiểm tra những thông tin sau:
                        1. Bạn đã liên kết tài khoản ngân hàng vẫn còn tiền.
                        2. Tài khoản ngân hàng của bạn không bị áp đặt giới hạn hoặc hạn chế nào.
                        3. Vui lòng xác minh rằng các thông tin bạn đã nhập (tức là họ tên đầy đủ, email, địa chỉ của chủ thẻ, v.v.) đều chính xác.
                        4. Vui lòng thực hiện giao dịch với số tiền thấp hơn, tần suất thấp hơn và giới hạn số lượng thẻ được sử dụng. 
                        
                        Nếu bạn vẫn không thể nạp Xu, hãy nhấn vào nút "Cần thêm trợ giúp" ở bên dưới để cung cấp cho chúng tôi thông tin chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                    {
                        title: 'Tại sao tôi không thể hoàn tất thanh toán?',
                        content: `Nếu bạn đủ điều kiện mua hàng nhưng không thể hoàn tất thanh toán, vui lòng kiểm tra những thông tin sau:
                        1. Bạn đã liên kết tài khoản ngân hàng vẫn còn tiền.
                        2. Tài khoản ngân hàng của bạn không bị áp đặt giới hạn hoặc hạn chế nào.
                        3. Vui lòng xác minh rằng các thông tin bạn đã nhập (tức là họ tên đầy đủ, email, địa chỉ của chủ thẻ, v.v.) đều chính xác.
                        4. Vui lòng thực hiện giao dịch với số tiền thấp hơn, tần suất thấp hơn và giới hạn số lượng thẻ được sử dụng. 
                        
                        Nếu bạn vẫn không thể nạp Xu, hãy nhấn vào nút "Cần thêm trợ giúp" ở bên dưới để cung cấp cho chúng tôi thông tin chi tiết và ảnh chụp màn hình về sự cố.`,
                    },
                    {
                        title: 'Tại sao tôi không nhận được điểm sau khi thực hiện thanh toán?',
                        content: `Hệ thống thường mất vài phút để xử lý các đơn hàng giao dịch. Vui lòng thử làm mới trang web hoặc đợi một lúc để xem sự cố có được khắc phục hay không. 

                        Nếu bạn vẫn không nhìn thấy số Xu đã mua, vui lòng gửi phiếu yêu cầu hỗ trợ bằng cách nhấn vào nút "Vẫn gặp sự cố" ở bên dưới và gửi kèm ảnh chụp màn hình đầy đủ về số dư xu và lịch sử mua hàng của bạn. 
                        Cách tìm số dư xu và lịch sử mua hàng của bạn:
                        1. Trên trang tiktok.com, bấm vào ảnh hồ sơ của bạn, rồi bấm vào "Nhận xu". Từ đây, bạn có thể xem số dư xu của mình.
                        2. Trên trang tiktok.com, bấm vào ảnh hồ sơ của bạn, rồi bấm vào "Nhận xu". Sau đó, bấm vào "Xem lịch sử giao dịch" để tìm đơn đặt của bạn và các hóa đơn tương ứng. 
                        
                        Hãy đảm bảo rằng ảnh chụp màn hình bạn gửi cho chúng tôi có chứa số dư xu của bạn và giao dịch có ID đơn hàng, số tiền giao dịch và thời gian thanh toán.`,
                    },
                    {
                        title: 'Tại sao số xu tôi đã mua trên trang web TikTok không xuất hiện trong ứng dụng TikTok trên thiết bị di động?',
                        content: `Nếu bạn có thể nhìn thấy số xu trên trang web tiktok.com nhưng số xu này lại không hiển thị trong trang "Số dư" trên ứng dụng TikTok cho di động, vui lòng kiểm tra thông tin tài khoản của bạn và đảm bảo rằng tài khoản mà bạn đã dùng để nạp xu từ trang web (tiktok.com) chính là tài khoản không nhận xu. 

                        Nếu sự cố vẫn tiếp diễn, vui lòng gửi cho chúng tôi ảnh chụp màn hình của trang "Số dư" từ ứng dụng TikTok cho di động và trang số dư xu từ trang web (tiktok.com).`,
                    },
                ],
            },
            {
                content: 'Đăng ký LIVE',
                type: 'LIVERegister',
                questions: [
                    {
                        title: 'Tôi không thể đăng ký vào các Cộng đồng LIVE khác',
                        content: `Nếu bạn đăng ký Cộng đồng LIVE trong ứng dụng, số lượng Cộng đồng LIVE tối đa mà bạn có thể đăng ký là 20.
                        Bạn có thể đăng ký thêm các Cộng đồng LIVE khác trên trang web TikTok. 
                        Nếu bạn có bất kỳ đề xuất nào, bạn có thể gửi đề xuất bằng cách nhấn vào nút "Bạn cần thêm trợ giúp?" ở bên dưới.`,
                    },
                    {
                        title: 'Đăng ký LIVE không khả dụng',
                        content: `Đăng ký LIVE chỉ khả dụng với những người dùng đủ 18 tuổi trở lên (ngoại lệ: bạn phải đủ 19 tuổi ở Hàn Quốc). 
                        Nếu bạn đáp ứng đủ yêu cầu nhưng không thể đăng ký Cộng đồng LIVE, vui lòng gửi vấn đề của bạn bằng cách nhấn vào nút "Bạn cần thêm trợ giúp?" ở bên dưới.
                        Lưu ý: 
                        Nếu chúng tôi phát hiện bất kỳ giao dịch bất thường nào trên tài khoản của bạn, tính năng đăng ký LIVE sẽ tạm thời không khả dụng. 
                        Để biết thêm thông tin, hãy xem Điều khoản đăng ký LIVE của chúng tôi. `,
                    },
                    {
                        title: 'Không thể xử lý thanh toán đăng ký LIVE của tôi',
                        content: `Nếu bạn đáp ứng các yêu cầu để đăng ký Cộng đồng LIVE nhưng khoản thanh toán của bạn không được xử lý, vui lòng xác nhận:
                        1. Bạn đã liên kết phương thức thanh toán hợp lệ với tài khoản Google Play, App Store hoặc trên trang web TikTok.
                        2. Phương thức thanh toán của bạn có đủ số dư cho đăng ký bạn đã chọn.
                        3. Bạn đang không sử dụng VPN.
                        4. Bạn đã cập nhật ứng dụng TikTok lên phiên bản mới nhất.
                        5. Bạn có kết nối mạng ổn định.
                        
                        Nếu bạn thực hiện giao dịch mua trong ứng dụng:
                        Truy cập vào Google Play hoặc Apple App Store để báo cáo vấn đề của bạn.
                        Nếu bạn thực hiện giao dịch mua trên phiên bản web: Gửi vấn đề của bạn bằng cách nhấn vào nút "Bạn cần thêm trợ giúp?" ở bên dưới.`,
                    },
                    {
                        title: 'Tôi không đăng ký Cộng đồng LIVE sau khi thanh toán',
                        content: `Nếu bạn vẫn không thể đăng ký Cộng đồng LIVE sau khi đã thanh toán, hãy thử khởi động lại ứng dụng hoặc làm mới trang web. Sau đó, hãy thử làm mới trang "Đăng ký LIVE". 

                        Nếu bạn vẫn không thể thấy Cộng đồng LIVE đã đăng ký, vui lòng gửi cho chúng tôi ảnh chụp màn hình đầy đủ về biên nhận mua hàng hoặc thông báo từ Google Play, Apple App Store hoặc tin nhắn trong hộp thư TikTok của bạn bằng cách nhấn vào nút "Bạn cần thêm trợ giúp?" ở bên dưới.
                        
                        Lưu ý: Bạn có thể tìm thấy biên nhận trong email xác nhận do Google Play hoặc Apple App Store gửi. Bạn cũng có thể tìm thấy tin nhắn trong hộp thư thông báo do TikTok gửi nếu bạn đăng ký Cộng đồng LIVE trên trang web TikTok. Vui lòng đảm bảo rằng ảnh chụp màn hình mà bạn gửi cho chúng tôi có chứa ID đơn hàng, số tiền giao dịch và thời gian thanh toán.`,
                    },
                    {
                        title: 'Cách yêu cầu hoàn tiền cho giao dịch đăng ký LIVE của bạn',
                        content: `Trừ trường hợp bạn không thể hưởng các lợi ích của cộng đồng LIVE, đăng ký Cộng đồng LIVE sẽ không đủ điều kiện được hoàn lại tiền.                                                                              Nếu bạn có bất kỳ đề xuất nào, bạn có thể gửi đề xuất bằng cách nhấn vào nút "Bạn cần thêm trợ giúp?" ở bên dưới.`,
                    },
                    {
                        title: 'Khác',
                        content: `Bạn không thể tìm ra sự cố đã gặp phải hoặc có đề xuất liên quan đến trải nghiệm "Đăng ký LIVE" của mình? Hãy nhấn vào "Bạn cần thêm trợ giúp?" ở bên dưới để cung cấp cho chúng tôi thông tin chi tiết và ảnh chụp màn hình về sự cố hoặc đề xuất.
                        `,
                    },
                ],
            },
        ],
    },
    {
        content: 'Không phản hồi/Giật lag/Khác',
        type: 'error',
        questions: [
            {
                title: '',
                content: `Vui lòng thực hiện theo các bước sau:
 
                TikTok trên máy tính:
                - Làm mới trang
                - Khởi động lại trình duyệt
                 
                TikTok trên thiết bị di động:
                - Chuyển đổi giữa Wi-Fi và dữ liệu di động
                - Làm mới trang
                - Khởi động lại trình duyệt
                - Khởi động lại thiết bị của bạn
                 
                 Sự cố vẫn tiếp diễn?
                Nhấn vào "Vẫn gặp sự cố" bên dưới và cung cấp thêm chi tiết và ảnh chụp màn hình về sự cố.`,
            },
        ],
    },
];
const defaultFeedback = {
    header: 'CÂU HỎI THƯỜNG GẶP',
    contents: [
        {
            title: 'Cách đăng nhập',
            content: `
                Để đăng nhập vào tài khoản:

                Đăng nhập trên Web：
                1. Nhấp vào biểu tượng "Đăng nhập" ở góc trên cùng bên phải
                2. Chọn phương thức đăng nhập
                3. Nhập thông tin tài khoản của bạn hoặc tiếp tục với phương thức đăng nhập đã chọn
                    
                Đăng nhập trên thiết bị di động của TikTok:
                1. Nhấn vào "Tôi" để đi tới hồ sơ
                2. Nhấn vào "Đăng ký"
                3. Nhấn vào "Đăng nhập" ở cuối trang
                4. Chọn phương thức đăng nhập
                5. Nhập thông tin tài khoản của bạn hoặc tiếp tục với phương thức đăng nhập đã chọn`,
        },
        {
            title: 'Số điện thoại này đã được đăng ký',
            content: `Mỗi số điện thoại chỉ có thể được liên kết với một tài khoản TikTok. Để liên kết số điện thoại của bạn với một tài khoản mới, hãy thay đổi số điện thoại đã liên kết với tài khoản hiện tại của bạn hoặc xóa tài khoản đó.
 
                Tài khoản đã xóa sẽ bị hủy kích hoạt trong 30 ngày, sau đó bị xóa vĩnh viễn. Sau đó, bạn có thể liên kết số điện thoại này với tài khoản mới.
                 
                Cách tìm tài khoản hiện đang được liên kết với số điện thoại của bạn:
                Đối với TikTok dành cho máy tính:
                1. Bấm vào biểu tượng "Đăng nhập"
                2. Chọn "Sử dụng số điện thoại/email/tên người dùng"
                3. Nhập số điện thoại của bạn để đăng nhập
                 
                Từ ứng dụng TikTok:
                1. Bấm vào "Đăng nhập" ở phía dưới cùng của trang
                2. Chọn "Sử dụng số điện thoại/email/tên người dùng"
                3. Nhập số điện thoại của bạn để đăng nhập
                 
                Nếu số điện thoại của bạn được liên kết với một tài khoản khác:
                Đối với TikTok dành cho máy tính:
                1. Sau khi bạn đã đăng xuất, hãy bấm vào "Đăng nhập" ở phía trên cùng
                2. Bấm vào "Đăng ký"
                3. Bấm vào "Sử dụng số điện thoại hoặc email"
                4. Nhập ngày sinh và số điện thoại của bạn
                5. Nhập mã được gửi tới thiết bị của bạn
                6. Bạn sẽ thấy ảnh hồ sơ của tài khoản được liên kết với số điện thoại. Nếu đây là tài khoản của bạn, hãy bấm "Thay vào đó, hãy đăng nhập"
                7. Nếu đây không phải là tài khoản của bạn, hãy bấm "Tiếp tục với số điện thoại này"
                 
                Từ ứng dụng TikTok:
                1. Sau khi bạn đăng xuất, hãy bấm "Sử dụng số điện thoại hoặc email" trên màn hình đăng nhập
                2. Nhập ngày sinh và số điện thoại của bạn
                3. Bấm "Gửi mã"
                4. Nhập mã được gửi tới thiết bị của bạn
                5. Bạn sẽ thấy ảnh hồ sơ của tài khoản được liên kết với số điện thoại. Nếu đây là tài khoản của bạn, hãy bấm "Thay vào đó, hãy đăng nhập"
                6. Nếu đây không phải là tài khoản của bạn, hãy bấm "Tiếp tục với số điện thoại này"
                 
                Chúng tôi sẽ xóa số điện thoại khỏi tài khoản kia và liên kết số điện thoại đó với tài khoản mới. Tài khoản trước đó sẽ nhận được thông báo rằng số điện thoại đã được sử dụng để tạo một tài khoản mới.`,
        },
        {
            title: 'Tại sao tôi không thể hoàn tất thanh toán?',
            content: `Nếu bạn đủ điều kiện mua hàng nhưng không thể hoàn tất thanh toán, vui lòng kiểm tra những thông tin sau:
                1. Bạn đã liên kết tài khoản ngân hàng vẫn còn tiền.
                2. Tài khoản ngân hàng của bạn không bị áp đặt giới hạn hoặc hạn chế nào.
                3. Vui lòng xác minh rằng các thông tin bạn đã nhập (tức là họ tên đầy đủ, email, địa chỉ của chủ thẻ, v.v.) đều chính xác.
                4. Vui lòng thực hiện giao dịch với số tiền thấp hơn, tần suất thấp hơn và giới hạn số lượng thẻ được sử dụng. 
                
                Nếu bạn vẫn không thể nạp Xu, hãy nhấn vào nút "Cần thêm trợ giúp" ở bên dưới để cung cấp cho chúng tôi thông tin chi tiết và ảnh chụp màn hình về sự cố.`,
        },
        {
            title: 'Tại sao tôi không nhận được điểm sau khi hoàn tất thanh toán?',
            content: `Hệ thống thường mất vài phút để xử lý các đơn hàng giao dịch. Vui lòng thử làm mới trang web hoặc đợi một lúc để xem sự cố có được khắc phục hay không. 

                Nếu bạn vẫn không nhìn thấy số Xu đã mua, vui lòng gửi phiếu yêu cầu hỗ trợ bằng cách nhấn vào nút "Vẫn gặp sự cố" ở bên dưới và gửi kèm ảnh chụp màn hình đầy đủ về số dư xu và lịch sử mua hàng của bạn. 
                Cách tìm số dư xu và lịch sử mua hàng của bạn:
                1. Trên trang tiktok.com, bấm vào ảnh hồ sơ của bạn, rồi bấm vào "Nhận xu". Từ đây, bạn có thể xem số dư xu của mình.
                2. Trên trang tiktok.com, bấm vào ảnh hồ sơ của bạn, rồi bấm vào "Nhận xu". Sau đó, bấm vào "Xem lịch sử giao dịch" để tìm đơn đặt của bạn và các hóa đơn tương ứng. 
                
                Hãy đảm bảo rằng ảnh chụp màn hình bạn gửi cho chúng tôi có chứa số dư xu của bạn và giao dịch có ID đơn hàng, số tiền giao dịch và thời gian thanh toán.
                
                `,
        },
    ],
};

function Feedback() {
    const [feedbackItems, setFeedbackItems] = useState([feedbackItem]);
    const [selectHistory, setSelectHistory] = useState({ lever1: false, lever2: '' });
    const [selectItems, setSelectItems] = useState();
    const [content, setContent] = useState(defaultFeedback);

    const items = feedbackItems[feedbackItems.length - 1].map((item, index) => {
        const { content, type, icon, children, questions } = item;

        return (
            <div
                key={index}
                className={cx('category-item', { active: selectItems === index })}
                onClick={() => {
                    if (children) {
                        setSelectItems();
                        setFeedbackItems((prev) => [...prev, children]);
                        setSelectHistory({
                            lever1: true,
                            lever2: content,
                        });
                        setContent(defaultFeedback);
                    } else {
                        setSelectItems(index);
                        setSelectHistory((prev) => ({ ...prev, lever1: true }));
                        setContent({
                            header: content,
                            contents: questions,
                        });
                    }
                }}
            >
                <div className={cx('category-content')}>{content}</div>
                <div className={cx('category-icon')}>{icon}</div>
            </div>
        );
    });
    return (
        <div className={cx('feedback')}>
            <div className={cx('header')}>
                <h1 className={cx('title')}>Phản hồi và trợ giúp</h1>
                <div className={cx('select-category')}>
                    {selectHistory.lever1 ? (
                        <div className={cx('selected-category')}>
                            <span
                                className={cx('selected-category_lever1', { active: selectHistory.lever2.length > 0 })}
                                onClick={() => {
                                    setFeedbackItems([feedbackItem]);
                                    setSelectHistory({ lever1: false, lever2: '' });
                                    setSelectItems();
                                }}
                            >
                                Trung tâm trợ giúp
                            </span>

                            {selectHistory.lever2.length > 0 ? (
                                <span className={cx('selected-category_lever2')}>{selectHistory.lever2}</span>
                            ) : (
                                ''
                            )}
                        </div>
                    ) : (
                        'CHỌN CHỦ ĐỀ'
                    )}
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('category-list')}>
                    {items}
                    {feedbackItems.length > 1 ? (
                        <div
                            className={cx('category-item')}
                            onClick={() => {
                                feedbackItems.splice(feedbackItems.length - 1, 1);
                                setFeedbackItems([...feedbackItems]);
                                setSelectHistory({ lever1: false, lever2: '' });
                                setSelectItems();
                                setContent(defaultFeedback);
                            }}
                        >
                            <div className={cx('category-content')}>Quay lại</div>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                <div className={cx('content')}>
                    <h3 className={cx('content-title')}>{content.header}</h3>
                    {content.contents.map((item, index) => {
                        return (
                            <div key={index} className={cx('content-item')}>
                                <div
                                    className={cx('question-wrap')}
                                    onClick={() => {
                                        const answer = document.getElementById(`content-answer${index}`);
                                        const icon = document.getElementById(`question-icon${index}`);
                                        const heightWrap = answer.offsetHeight;
                                        const contentHeight = document.getElementById(`answer${index}`).offsetHeight;
                                        if (heightWrap === 0) {
                                            answer.style.height = contentHeight + 'px';
                                            icon.style.transform = 'rotate(180deg)';
                                        } else {
                                            answer.style.height = 0;
                                            icon.style.transform = 'rotate(0deg)';
                                        }
                                    }}
                                >
                                    <div className={cx('question')}>{item.title}</div>
                                    <span
                                        id={`question-icon${index}`}
                                        className={cx('question-icon')}
                                        style={{ display: content.contents.length < 2 ? 'none' : '' }}
                                    >
                                        <Icons.Up />
                                    </span>
                                </div>
                                <div
                                    id={`content-answer${index}`}
                                    className={cx('content-answer')}
                                    style={{ height: content.contents.length < 2 ? 'auto' : '' }}
                                >
                                    <div id={`answer${index}`} className={cx('answer-wrap')}>
                                        <div className={cx('answer')}>
                                            <div>{item.content}</div>
                                        </div>
                                        <div id={`user-response${index}`} className={cx('user-response')}>
                                            <p>Vấn đề của bạn đã được xử lý chưa?</p>
                                            <div className={cx('response-btn')}>
                                                <button
                                                    onClick={() => {
                                                        const userRes = document.getElementById(
                                                            `user-response${index}`,
                                                        );
                                                        userRes.textContent = 'Cảm ơn phản hồi của bạn';
                                                        userRes.querySelectorAll('button').forEach((item) => {
                                                            item.style.display = 'none';
                                                        });
                                                    }}
                                                >
                                                    Có
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        const userRes = document.getElementById(
                                                            `user-response${index}`,
                                                        );
                                                        userRes.textContent = 'Cảm ơn phản hồi của bạn';
                                                        userRes.querySelectorAll('button').forEach((item) => {
                                                            item.style.display = 'none';
                                                        });
                                                    }}
                                                >
                                                    Không
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={cx('footer')}></div>
        </div>
    );
}
export default Feedback;
